/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private sessionStore: SessionStore,
    private http: HttpClient
  ) { }

  login(username: string, password: string){
    if(username === 'livetotell' && password === '1234')
      return {
        status: true,
        role: 'agent'
      }
    else return {
        status: true,
        role: 'customer'
    }
  }

  updateLogin(username: string, password: string){
    try 
    {
        this.sessionStore.update(state => ({
            username: username,
            password: password

        }));
    } catch(error) {
      this.sessionStore.setError(error);
    }
  }

  updateRole(newRole: string){
    try 
    {
        this.sessionStore.update(state => ({
           role: newRole

        }));
    } catch(error) {
      this.sessionStore.setError(error);
    }
  }

  updateLoginDetails(newName: string, newPass: string, newRole: string){
    this.updateLogin(newName, newPass)
    this.updateRole(newRole)
  }

  destroy(){
    this.sessionStore.destroy();
  }

}

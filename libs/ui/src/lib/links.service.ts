/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { Links } from './links.interface';


@Injectable({
  providedIn: 'root'
})
export class LinksService {

  private navbarLinks_agents: Array<Links> = [{
    link: '/add-flight',
    name: 'Add Flight'
  },
  {
    link: '/add-hotel',
    name: 'Add Hotel'
  }];
  private navbarLinks_customers: Array<Links> = [{
    link: '/choose-flight',
    name: 'Choose Flight'
  },
  {
    link: '/choose-hotel',
    name: 'Choose Hotel'
  }];
  private navbarLinks_all: Array<Links> = [{
    link: '/homepage',
    name: 'Homepage'
  },
  {
    link: '/login',
    name: 'Login'
  },
  {
    link: '/register',
    name: 'Register'
  }];


  constructor() { }

  getLinks(role: string){
    switch(role){
      case 'agent':
        return this.getAgentLinks()
        
      case 'customer':
        return this.getCutomersLinks()
        
      case 'shared':
        return this.getSharedLinks()
       
      default:
        return this.getSharedLinks()
        
    }
  }

  private getAgentLinks(){
    return this.navbarLinks_agents;
  }

  private getCutomersLinks(){
    return this.navbarLinks_customers;
  }

  private getSharedLinks(){
    return this.navbarLinks_all;
  }
}

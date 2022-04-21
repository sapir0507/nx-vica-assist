/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { 
  FormControl, 
  FormGroup, 
  Validators 
} from '@angular/forms';
import { 
  AuthService, 
  SessionQuery, 
  SessionService, 
  SessionStore 
} from '@proj/login';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  
  formGroup = new FormGroup({
    username: new FormControl(undefined, [Validators.required]),
    password: new FormControl(undefined, Validators.compose([Validators.required, Validators.minLength(4)])),
    googleAuthenticator: new FormControl(undefined, Validators.required)   
  });

  isLoading$ = this.sessionQuery.selectLoading();
  error$ = this.sessionQuery.selectError();

  constructor(
    private auth: AuthService,
    private sessionQuery: SessionQuery,
    private sessionService: SessionService,
    private loginStore: SessionStore
  ) {}

  onSubmit(){
    console.log(this.formGroup.value)
    const isLoggedIn = this.sessionService.login(
      this.formGroup.value['username'].value, 
      this.formGroup.value['password'].value)
    if(isLoggedIn.role === 'agent'){
      console.log('agent')
    }
    else console.log('customer')
  }

  onGoogleAuthenticator($event: Event) {
    console.log($event);
  }


}

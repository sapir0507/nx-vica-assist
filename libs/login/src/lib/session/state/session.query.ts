import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SessionState, SessionStore } from './session.store';


@Injectable()
export class SessionQuery extends Query<SessionState> {  

    allState$ = this.select();
    isLoggedIn$ = this.select(state => state.role === 'agent' || state.role === 'customer'? true: false);
    selectName$ = this.select('username');
    selectPass$ = this.select('password');
    selectRole$ = this.select('role');


    // Returns { username, password, role, token }
    multiProps$ = this.select(['username', 'password', 'role']);
    

     // Returns [ username, password, role, token ]
    multiPropsCallback$ = this.select(
        [state => state.username, state => state.password, state => state.role]
    )
    


  constructor(protected override store: SessionStore) {
    super(store);
  }

  get isLoggedIn() {
    return !!this.getValue().role;
  }

  get Role() {
    return this.getValue().role;
  }
}
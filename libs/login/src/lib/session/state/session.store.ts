import { Store, StoreConfig, enableAkitaProdMode } from '@datorama/akita';
import { environment } from '@proj/ui'


  export interface SessionState {
    username: string;
    password: string;
    role: string;
  }

 
  export function createInitialState(): SessionState {
    return {
      username: '',
      password: '',
      role: ''
    };
  }
  
  @StoreConfig({ name: 'session' })
  export class SessionStore extends Store<SessionState> {
    constructor() {
      if(environment.production){ enableAkitaProdMode() }
      super(createInitialState());
    }
  }
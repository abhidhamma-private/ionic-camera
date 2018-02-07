import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';

import 'rxjs/add/operator/map';

import { User } from '../../pages/models/user';



@Injectable()
export class AuthProvider {

  constructor(public http: Http,
    public angularFireAuth: AngularFireAuth) {
  }

  login(user: User): Promise<void> {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  addUser(user): Promise<void> {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { of } from 'rxjs';


@Injectable()
export class LoginService {
  

  constructor(private http: HttpClient) {}

  

  logIn(userName: string, password: string): Observable<any> {
    const payload = {

      'userName': userName,
      'password':password
    }
     return of(payload);
  }


}
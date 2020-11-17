import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState, selectLoginState } from '../store/app.states';
import { LogOut } from '../store/actions/login.actions';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  

  getState: Observable<any>;
  loggeduser: any;


  constructor(
    private store: Store<AppState>
  ) {  }

  ngOnInit() {

    this.store.select(selectLoginState).subscribe((res) => {
      this.loggeduser = res;
    });
  }

  logOut(): void {
    this.store.dispatch(new LogOut);
  }

}
import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {UserStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {User} from '@models/vo/user';

@Component({
  selector: 'app-user-main',
  templateUrl: 'user-main.component.html',
  styles: []
})
export class UserMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<User> = UserStoreActions.actions;

  ngOnInit() {
  }
}

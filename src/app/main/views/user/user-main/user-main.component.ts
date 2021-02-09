import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AddressStoreActions, CompanyStoreActions, RootStoreState, UserStoreActions, UserStoreRelationshipSelectors, UserStoreSelectors} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {User} from '@models/vo/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-main',
  templateUrl: 'user-main.component.html',
  styles: []
})
export class UserMainComponent implements OnInit {

  user$: Observable<any>;
  users$: Observable<any>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<User> = UserStoreActions.actions;

  ngOnInit(): void {
    this.store$.dispatch(UserStoreActions.SearchRequest({queryParams: {}}));
    //
    //
    //
    this.store$.dispatch(AddressStoreActions.SearchRequest({queryParams: {}}));
    //
    //
    //
    this.store$.dispatch(CompanyStoreActions.SearchRequest({queryParams: {}}));
    //
    //
    //
    this.user$ = this.store$.select(UserStoreRelationshipSelectors.selectUser, '1');
    this.users$ = this.store$.select(UserStoreRelationshipSelectors.selectUsers, ['1']);
  }
}

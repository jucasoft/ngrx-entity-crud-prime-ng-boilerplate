import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AddressStoreActions, CommentStoreActions, CompanyStoreActions, RootStoreState, UserStoreActions, UserStoreRelationshipSelectors, UserStoreSelectors} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {User} from '@models/vo/user';
import {Observable} from 'rxjs';
import {selectToCommentAll$} from '@root-store/user-store/selectors';

@Component({
  selector: 'app-user-main',
  templateUrl: 'user-main.component.html',
  styles: []
})
export class UserMainComponent implements OnInit {

  user$: Observable<any>;
  users$: Observable<any>;

  collectionA$: Observable<User[]>;
  collectionB$: Observable<User[]>;
  collectionC$: Observable<User[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<User> = UserStoreActions.actions;

  ngOnInit(): void {
    this.store$.dispatch(UserStoreActions.SearchRequest({queryParams: {_limit: 10}}));
    this.store$.dispatch(CommentStoreActions.SearchRequest({queryParams: {}}));
    this.store$.dispatch(AddressStoreActions.SearchRequest({queryParams: {}}));
    this.store$.dispatch(CompanyStoreActions.SearchRequest({queryParams: {}}));

    this.user$ = this.store$.select(UserStoreRelationshipSelectors.selectUser, '1');
    this.users$ = this.store$.select(UserStoreRelationshipSelectors.selectUsers, ['1']);

    this.collectionA$ = this.store$.select(UserStoreSelectors.selectToCommentAll);
    this.collectionB$ = this.store$.select(UserStoreSelectors.selectToCommentAllCustom);
    this.collectionC$ = this.store$.pipe(
      selectToCommentAll$()
    );

    setInterval(() => {
      const item: any = {
        id: 3,
        author: 3,
        text: Math.random() * 3000 + ''
      };
      this.store$.dispatch(CommentStoreActions.EditRequest({item}));
    }, 2000);
  }
}

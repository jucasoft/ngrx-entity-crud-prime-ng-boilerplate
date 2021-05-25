import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CommentStoreActions, RootStoreState, UserStoreActions, UserStoreSelectors} from '@root-store/index';
import {Observable} from 'rxjs';
import {User} from '@models/vo/user';
import {RouterStoreActions} from '@root-store/router-store/index';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';

@Component({
  selector: 'app-user-list',
  templateUrl: `user-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {


  collection$: Observable<User[]>;
  cols: any;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('UserListComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('UserListComponent.ngOnInit()');

    this.collection$ = this.store$.select(
      UserStoreSelectors.selectUserToCommentAll
    );

    this.store$.dispatch(
      UserStoreActions.SearchRequest({queryParams: {_limit: 15}})
    );

    this.store$.dispatch(
      CommentStoreActions.SearchRequest({queryParams: {}})
    );

    setInterval(() => {
      const item: any = {
        id: 3,
        author: 3,
        text: Math.random() * 10000 + ''
      };
      this.store$.dispatch(CommentStoreActions.EditRequest({item}));
    }, 1000);
  }

  onEdit(item) {
    console.log('UserListComponent.onEdit()');

    const data: PopUpData<User> = {
      item,
      props: {title: 'Edit User', route: 'user'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['user', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value) {
    console.log('UserListComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<User> = {
      item,
      props: {title: 'Copy User', route: 'user'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['user', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item) {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(UserStoreActions.DeleteRequest({item}));
      }
    });

  }

}

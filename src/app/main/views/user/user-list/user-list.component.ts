import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {UserStoreActions, UserStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {User} from '@models/vo/user';
import {RouterStoreActions} from '@root-store/router-store/index';
import {tap} from 'rxjs/operators';
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
  }

  ngOnInit() {
    this.collection$ = this.store$.select(
      UserStoreSelectors.selectAll
    ).pipe(
      tap(values => {
        if (values && values.length > 0) {
          this.cols = Object.keys(values[0]);
        }
      })
    );

    this.store$.dispatch(
      UserStoreActions.SearchRequest({queryParams: {}})
    );

  }

  onEdit(item) {

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

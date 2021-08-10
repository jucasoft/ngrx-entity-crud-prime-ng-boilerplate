import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {LaunchStoreActions, LaunchStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {Launch} from '@models/vo/launch';
import {RouterStoreActions} from '@root-store/router-store/index';
import {tap} from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';

@Component({
  selector: 'app-launch-list',
  templateUrl: `launch-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {


  collection$: Observable<Launch[]>;
  cols: any;
  itemsSelected$: Observable<Launch[]>;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('LaunchListComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('LaunchListComponent.ngOnInit()');

    this.itemsSelected$ = this.store$.pipe(
      select(LaunchStoreSelectors.selectItemsSelected)
    );

    this.collection$ = this.store$.select(
      LaunchStoreSelectors.selectAll
    ).pipe(
      tap(values => {
        if (values && values.length > 0) {
          this.cols = Object.keys(values[0]);
        }
      })
    );

    this.store$.dispatch(
      LaunchStoreActions.SearchRequest({queryParams: {}})
    );

  }

  onEdit(item): void {
    console.log('LaunchListComponent.onEdit()');

    const data: PopUpData<Launch> = {
      item,
      props: {title: 'Edit Launch', route: 'launch'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['launch', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value): void {
    console.log('LaunchListComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<Launch> = {
      item,
      props: {title: 'Copy Launch', route: 'launch'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['launch', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item): void {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(LaunchStoreActions.DeleteRequest({item}));
      }
    });

  }

  onSelectionChange(items: Launch[]): void {
    console.log('LaunchListComponent.onSelectionChange()');
    console.log('items', items);
    this.store$.dispatch(LaunchStoreActions.SelectItems({items}));
  }

}

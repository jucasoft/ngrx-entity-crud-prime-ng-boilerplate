import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AddressStoreActions, AddressStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {Address} from '@models/vo/address';
import {RouterStoreActions} from '@root-store/router-store/index';
import {tap} from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';

@Component({
  selector: 'app-address-list',
  templateUrl: `address-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressListComponent implements OnInit {


  collection$: Observable<Address[]>;
  cols: any;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('AddressListComponent.constructor()');
  }

  ngOnInit() {
    console.log('AddressListComponent.ngOnInit()');

    this.collection$ = this.store$.select(
      AddressStoreSelectors.selectAll
    ).pipe(
      tap(values => {
        if (values && values.length > 0) {
          this.cols = Object.keys(values[0]);
        }
      })
    );

    this.store$.dispatch(
      AddressStoreActions.SearchRequest({queryParams: {}})
    );

  }

  onEdit(item) {
    console.log('AddressListComponent.onEdit()');

    const data: PopUpData<Address> = {
      item,
      props: {title: 'Edit Address', route: 'address'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['address', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value) {
    console.log('AddressListComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<Address> = {
      item,
      props: {title: 'Copy Address', route: 'address'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['address', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item) {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(AddressStoreActions.DeleteRequest({item}));
      }
    });

  }

}

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Address} from '@models/vo/address';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-button-new-address',
  template: `
    <button type="button" pButton icon="fa fa-fw fa-plus"
            label="New Address" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewAddressComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: Address = new Address();

    const data: PopUpData<Address> = {
      item,
      props: {title: 'New Address', route: 'address'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['address', {outlets: {popUp: ['edit']}}],
      data
    }));
  }

}

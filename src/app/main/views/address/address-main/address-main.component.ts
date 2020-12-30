import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AddressStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Address} from '@models/vo/address';

@Component({
  selector: 'app-address-main',
  templateUrl: 'address-main.component.html',
  styles: []
})
export class AddressMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<Address> = AddressStoreActions.actions;

  ngOnInit() {
  }
}

import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CoinStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Coin} from '@models/vo/coin';

@Component({
  selector: 'app-coin-main',
  templateUrl: 'coin-main.component.html',
  styles: []
})
export class CoinMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<Coin> = CoinStoreActions.actions;

  ngOnInit() {
  }
}

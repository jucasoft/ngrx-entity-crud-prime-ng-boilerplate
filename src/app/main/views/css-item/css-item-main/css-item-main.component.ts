import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CssItemStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {CssItem} from '@models/vo/css-item';

@Component({
  selector: 'app-css-item-main',
  templateUrl: 'css-item-main.component.html',
  styles: []
})
export class CssItemMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<CssItem> = CssItemStoreActions.actions;

  ngOnInit(): void {
  }
}

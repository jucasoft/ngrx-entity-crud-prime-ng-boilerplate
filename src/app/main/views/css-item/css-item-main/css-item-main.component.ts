import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {CssItemStoreActions, CssItemStoreSelectors, CssSourceStoreActions, CssSourceStoreSelectors, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {CssItem} from '@models/vo/css-item';
import {Observable} from 'rxjs';
import {CssSource} from '@models/vo/css-source';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-css-item-main',
  templateUrl: 'css-item-main.component.html',
  styles: []
})
export class CssItemMainComponent implements OnInit {

  collection$:Observable<CssItem[]>
  source$:Observable<CssSource>

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<CssItem> = CssItemStoreActions.actions;
  ngOnInit(): void {
    this.collection$ = this.store$.pipe(
      select(CssItemStoreSelectors.selectAll),
      map((values:CssItem[]) => values.filter(value => !!value.varName))
    )
    this.source$ = this.store$.select(
      CssSourceStoreSelectors.selectItem
    );
  }

  loadData() {
    this.store$.dispatch(
      CssItemStoreActions.SearchRequest({queryParams: {}})
    );
    this.store$.dispatch(
      CssSourceStoreActions.SelectRequest({queryParams: {}})
    );
  }

  generate(collection, source) {

  }
}

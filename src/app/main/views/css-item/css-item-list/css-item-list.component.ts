import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {CssItemStoreActions, CssItemStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {CssItem} from '@models/vo/css-item';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-css-item-list',
  templateUrl: `css-item-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssItemListComponent implements OnInit {

  collection$: Observable<CssItem[]>;
  cols: any;
  itemsSelected$: Observable<CssItem[]>;
  colors$: Observable<FilterItem[]>;
  properties$: Observable<FilterItem[]>;

  constructor(private store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {

    this.itemsSelected$ = this.store$.pipe(
      select(CssItemStoreSelectors.selectItemsSelected)
    );

    this.collection$ = this.store$.select(
      CssItemStoreSelectors.selectAll
    );

    this.colors$ = this.store$.select(
      CssItemStoreSelectors.selectAll
    ).pipe(
      map(values => getDistinct('color', values))
    );

    this.properties$ = this.store$.select(
      CssItemStoreSelectors.selectAll
    ).pipe(
      map(values => getDistinct('property', values))
    );

  }

  onSelectionChange(items: CssItem[]): void {
    this.store$.dispatch(CssItemStoreActions.SelectItems({items}));
  }

}

function getDistinct(attr: string, source: any[]): FilterItem[] {
  const result = source.reduce((prev, curr) => {
    const key = curr[attr];
    prev[key] = typeof prev[key] === 'number' ? prev[key] + 1 : 1;
    return prev;
  }, {})
  return Object.keys(result).map(value => ({value, qt: result[value]}));
}

class FilterItem {
  public value: string;
  public qt: number;
}

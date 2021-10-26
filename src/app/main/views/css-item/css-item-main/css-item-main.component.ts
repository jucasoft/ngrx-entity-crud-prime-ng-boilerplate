import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {CssItemStoreActions, CssItemStoreSelectors, CssSourceStoreActions, CssSourceStoreSelectors, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {CssItem} from '@models/vo/css-item';
import {Observable} from 'rxjs';
import {CssSource} from '@models/vo/css-source';
import {map} from 'rxjs/operators';
import {toCSS} from 'css-convert-json';
import {CssItemEditComponent} from '@views/css-item/css-item-edit/css-item-edit.component';
import {DialogService} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-css-item-main',
  templateUrl: 'css-item-main.component.html',
  providers: [DialogService],
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssItemMainComponent implements OnInit {

  collection$: Observable<CssItem[]>
  source$: Observable<CssSource>
  itemsSelected$: Observable<CssItem[]>;

  constructor(private readonly dialogService: DialogService, private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<CssItem> = CssItemStoreActions.actions;

  ngOnInit(): void {
    this.collection$ = this.store$.pipe(
      select(CssItemStoreSelectors.selectAll),
      map((values: CssItem[]) => values.filter(value => !!value.varName))
    )
    this.source$ = this.store$.select(
      CssSourceStoreSelectors.selectItem
    );

    this.itemsSelected$ = this.store$.pipe(
      select(CssItemStoreSelectors.selectItemsSelected)
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

  generate(collection: CssItem[], source) {
    console.log('source', source);
    const cloned = JSON.parse(JSON.stringify(source))
    collection.forEach((item: CssItem) => {
      console.log('cloned.children[item.styleRule]', cloned.children[item.styleRule]);
      const styleRuleItem = cloned.children[item.styleRule];
      const propertyItem: string = styleRuleItem.attributes[item.property];
      console.log('propertyItem', propertyItem);
      const newPropertyItem = propertyItem.replace(item.color, item.varName);
      console.log('newPropertyItem', newPropertyItem);
      styleRuleItem.attributes[item.property] = newPropertyItem;
    })
    console.log('toCSS(cloned)', toCSS(cloned));
  }

  onEditMany(values: CssItem[]): void {

    const ref = this.dialogService.open(CssItemEditComponent, {
      header: 'Var name',
      width: '70%'
    });

    ref.onClose.subscribe((varName: string) => {
      if (varName) {
        const mutationParams = values.map(value => ({...value, varName}));
        this.store$.dispatch(CssItemStoreActions.EditManyRequest({
          mutationParams
        }));
        this.store$.dispatch(CssItemStoreActions.SelectItems({items: []}))
      }
    });

  }
}

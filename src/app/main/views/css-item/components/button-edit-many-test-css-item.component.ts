import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CssItemStoreActions, CssItemStoreSelectors, RootStoreState} from '@root-store/index';
import {CssItem} from '@models/vo/css-item';
import {DialogService} from 'primeng/dynamicdialog';
import {CssItemEditComponent} from '@views/css-item/css-item-edit/css-item-edit.component';

@Component({
  selector: 'app-button-edit-many-test-css-item',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-plus"
            label="Edit many ({{itemsSelected.length}})" (click)="onEditMany(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-success"></button>
  `,
  providers: [DialogService],
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonEditManyTestCssItemComponent implements OnInit {

  itemsSelected$: Observable<CssItem[]>;

  constructor(private readonly dialogService: DialogService, private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(CssItemStoreSelectors.selectItemsSelected)
    );
  }

  onEditMany(values: CssItem[]): void {

    const ref = this.dialogService.open(CssItemEditComponent, {
      header: 'Var name',
      width: '70%'
    });

    ref.onClose.subscribe((varName: string) => {
      if (varName) {
        const items = values.map(value => ({...value, varName}));
        this.store$.dispatch(CssItemStoreActions.EditManyRequest({
          items
        }));
        this.store$.dispatch(CssItemStoreActions.SelectItems({items: []}))
      }
    });

  }

}

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CoinStoreActions, CoinStoreSelectors, RootStoreState} from '@root-store/index';
import {Coin} from '@models/vo/coin';

@Component({
  selector: 'app-button-delete-coin',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-trash"
            label="Delete" (click)="onDelete(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-danger"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDeleteCoinComponent implements OnInit {

  itemsSelected$: Observable<Coin[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(CoinStoreSelectors.selectItemsSelected)
    );
  }

  onDelete(items: Coin[]): void {
    this.store$.dispatch(CoinStoreActions.DeleteManyRequest({items}));
  }

}

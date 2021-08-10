import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {LaunchStoreActions, LaunchStoreSelectors, RootStoreState} from '@root-store/index';
import {Launch} from '@models/vo/launch';

@Component({
  selector: 'app-button-delete-launch',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-trash"
            label="Delete ({{itemsSelected.length}})" (click)="onDelete(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-danger"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDeleteLaunchComponent implements OnInit {

  itemsSelected$: Observable<Launch[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(LaunchStoreSelectors.selectItemsSelected)
    );
  }

  onDelete(items: Launch[]): void {
    this.store$.dispatch(LaunchStoreActions.DeleteManyRequest({items}));
  }

}

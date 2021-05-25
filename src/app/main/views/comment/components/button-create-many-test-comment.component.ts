import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CommentStoreActions, CommentStoreSelectors, RootStoreState} from '@root-store/index';
import {Comment} from '@models/vo/comment';

@Component({
  selector: 'app-button-create-many-test-comment',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-plus"
            label="Create many ({{itemsSelected.length}})" (click)="onCreateMany(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonCreateManyTestCommentComponent implements OnInit {

  itemsSelected$: Observable<Comment[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(CommentStoreSelectors.selectItemsSelected)
    );
  }

  onCreateMany(values: Comment[]): void {
    const items = values.map(value => {
      const keys = Object.keys(value);
      const result = {...value};
      keys.forEach(key => {
        result.id = null;
        if (key !== 'id' && typeof result[key] === 'string') {
          result[key] = 'edited ' + new Date().getSeconds();
        }
      });
      return result;
    });
    this.store$.dispatch(CommentStoreActions.CreateManyRequest({items}));
  }

}

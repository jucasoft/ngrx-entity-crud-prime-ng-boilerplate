import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CommentStoreActions, CommentStoreSelectors, RootStoreState} from '@root-store/index';
import {Comment} from '@models/vo/comment';

@Component({
  selector: 'app-button-delete-comment',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-trash"
            label="Delete ({{itemsSelected.length}})" (click)="onDelete(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-danger"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDeleteCommentComponent implements OnInit {

  itemsSelected$: Observable<Comment[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(CommentStoreSelectors.selectItemsSelected)
    );
  }

  onDelete(items: Comment[]): void {
    this.store$.dispatch(CommentStoreActions.DeleteManyRequest({items}));
  }

}

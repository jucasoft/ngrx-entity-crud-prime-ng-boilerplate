import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {CommentStoreActions, CommentStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {Comment} from '@models/vo/comment';
import {RouterStoreActions} from '@root-store/router-store/index';
import {tap} from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';

@Component({
  selector: 'app-comment-list',
  templateUrl: `comment-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentListComponent implements OnInit {


  collection$: Observable<Comment[]>;
  cols: any;
  itemsSelected$: Observable<Comment[]>;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('CommentListComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('CommentListComponent.ngOnInit()');

    this.itemsSelected$ = this.store$.pipe(
      select(CommentStoreSelectors.selectItemsSelected)
    );

    this.collection$ = this.store$.select(
      CommentStoreSelectors.selectAll
    ).pipe(
      tap(values => {
        if (values && values.length > 0) {
          this.cols = Object.keys(values[0]);
        }
      })
    );

    this.store$.dispatch(
      CommentStoreActions.SearchRequest({queryParams: {}})
    );

  }

  onEdit(item): void {
    console.log('CommentListComponent.onEdit()');

    const data: PopUpData<Comment> = {
      item,
      props: {title: 'Edit Comment', route: 'comment'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['comment', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value): void {
    console.log('CommentListComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<Comment> = {
      item,
      props: {title: 'Copy Comment', route: 'comment'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['comment', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item): void {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(CommentStoreActions.DeleteRequest({item}));
      }
    });

  }

  onSelectionChange(items: Comment[]): void {
    console.log('CommentListComponent.onSelectionChange()');
    console.log('items', items);
    this.store$.dispatch(CommentStoreActions.SelectItems({items}));
  }

}

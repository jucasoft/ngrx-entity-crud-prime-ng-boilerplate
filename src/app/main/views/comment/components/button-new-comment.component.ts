import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Comment} from '@models/vo/comment';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-button-new-comment',
  template: `
    <button type="button" pButton icon="pi pi-plus"
            label="New Comment" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewCommentComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: Comment = new Comment();

    const data: PopUpData<Comment> = {
      item,
      props: {title: 'New Comment', route: 'comment'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['comment', {outlets: {popUp: ['edit']}}],
      data
    }));
  }

}

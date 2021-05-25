import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CommentStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Comment} from '@models/vo/comment';

@Component({
  selector: 'app-comment-main',
  templateUrl: 'comment-main.component.html',
  styles: []
})
export class CommentMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<Comment> = CommentStoreActions.actions;

  ngOnInit(): void {
  }
}

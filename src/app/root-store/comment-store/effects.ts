import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Comment} from '@models/vo/comment';
import {CommentService} from '@services/comment.service';
import {
  createCall, createCatchError, createResponse,
  createManyCall, createManyCatchError, createManyResponse,
  deleteCall, deleteCatchError, deleteResponse,
  deleteManyCall, deleteManyCatchError, deleteManyResponse,
  editCall, editCatchError, editResponse,
  editManyCall, editManyCatchError, editManyResponse,
  searchCall, searchCatchError, searchResponse,
  selectCall, selectCatchError, selectResponse
} from 'ngrx-entity-crud';
import {repeat} from 'rxjs/operators';

@Injectable()
export class CommentStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: CommentService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<Comment>(this.service),
    searchResponse<Comment>(actions, {dispatchResponse: false}),
    searchCatchError<Comment>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<Comment>(this.service),
    deleteResponse<Comment>(actions, Comment, {dispatchResponse: false}),
    deleteCatchError<Comment>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<Comment>(this.service),
    deleteManyResponse<Comment>(actions, Comment, {dispatchResponse: false}),
    deleteManyCatchError<Comment>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<Comment>(this.service),
    createResponse<Comment>(actions, {dispatchResponse: false}),
    createCatchError<Comment>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<Comment>(this.service),
    createManyResponse<Comment>(actions, {dispatchResponse: false}),
    createManyCatchError<Comment>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<Comment>(this.service),
    editResponse<Comment>(actions, {dispatchResponse: false}),
    editCatchError<Comment>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<Comment>(this.service),
    editManyResponse<Comment>(actions, {dispatchResponse: false}),
    editManyCatchError<Comment>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<Comment>(this.service),
    selectResponse<Comment>(actions, {dispatchResponse: false}),
    selectCatchError<Comment>(actions),
    repeat()
  ));

}

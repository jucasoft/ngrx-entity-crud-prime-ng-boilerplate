import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Launch} from '@models/vo/launch';
import {LaunchService} from '@services/launch.service';
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
export class LaunchStoreEffects {

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<Launch>(this.service),
    searchResponse<Launch>(actions, {dispatchResponse: false}),
    searchCatchError<Launch>(actions),
    repeat()
  ));


  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<Launch>(this.service),
    deleteResponse<Launch>(actions, Launch, {dispatchResponse: false}),
    deleteCatchError<Launch>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<Launch>(this.service),
    deleteManyResponse<Launch>(actions, Launch, {dispatchResponse: false}),
    deleteManyCatchError<Launch>(actions),
    repeat()
  ));
  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<Launch>(this.service),
    createResponse<Launch>(actions, {dispatchResponse: false}),
    createCatchError<Launch>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<Launch>(this.service),
    createManyResponse<Launch>(actions, {dispatchResponse: false}),
    createManyCatchError<Launch>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<Launch>(this.service),
    editResponse<Launch>(actions, {dispatchResponse: false}),
    editCatchError<Launch>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<Launch>(this.service),
    editManyResponse<Launch>(actions, {dispatchResponse: false}),
    editManyCatchError<Launch>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<Launch>(this.service),
    selectResponse<Launch>(actions, {dispatchResponse: false}),
    selectCatchError<Launch>(actions),
    repeat()
  ));

  constructor(private readonly actions$: Actions, private readonly service: LaunchService) {
  }
  
}

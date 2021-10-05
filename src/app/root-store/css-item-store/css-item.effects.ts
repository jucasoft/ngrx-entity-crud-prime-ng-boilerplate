import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './css-item.actions';
import {CssItem} from '@models/vo/css-item';
import {CssItemService} from '@services/css-item.service';
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
export class CssItemStoreEffects {

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<CssItem>(this.service),
    searchResponse<CssItem>(actions, {dispatchResponse: false}),
    searchCatchError<CssItem>(actions),
    repeat()
  ));


  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<CssItem>(this.service),
    deleteResponse<CssItem>(actions, CssItem, {dispatchResponse: false}),
    deleteCatchError<CssItem>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<CssItem>(this.service),
    deleteManyResponse<CssItem>(actions, CssItem, {dispatchResponse: false}),
    deleteManyCatchError<CssItem>(actions),
    repeat()
  ));
  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<CssItem>(this.service),
    createResponse<CssItem>(actions, {dispatchResponse: false}),
    createCatchError<CssItem>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<CssItem>(this.service),
    createManyResponse<CssItem>(actions, {dispatchResponse: false}),
    createManyCatchError<CssItem>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<CssItem>(this.service),
    editResponse<CssItem>(actions, {dispatchResponse: false}),
    editCatchError<CssItem>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<CssItem>(this.service),
    editManyResponse<CssItem>(actions, {dispatchResponse: false}),
    editManyCatchError<CssItem>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<CssItem>(this.service),
    selectResponse<CssItem>(actions, {dispatchResponse: false}),
    selectCatchError<CssItem>(actions),
    repeat()
  ));

  constructor(private readonly actions$: Actions, private readonly service: CssItemService) {
  }

}

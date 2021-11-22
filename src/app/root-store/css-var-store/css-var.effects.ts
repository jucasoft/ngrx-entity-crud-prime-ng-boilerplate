import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './css-var.actions';
import {CssVar} from '@models/vo/css-var';
import {CssVarService} from '@services/css-var.service';
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
export class CssVarStoreEffects {

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<CssVar>(this.service),
    searchResponse<CssVar>(actions, {dispatchResponse: false}),
    searchCatchError<CssVar>(actions),
    repeat()
  ));


  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<CssVar>(this.service),
    deleteResponse<CssVar>(actions, CssVar, {dispatchResponse: false}),
    deleteCatchError<CssVar>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<CssVar>(this.service),
    deleteManyResponse<CssVar>(actions, CssVar, {dispatchResponse: false}),
    deleteManyCatchError<CssVar>(actions),
    repeat()
  ));
  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<CssVar>(this.service),
    createResponse<CssVar>(actions, {dispatchResponse: false}),
    createCatchError<CssVar>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<CssVar>(this.service),
    createManyResponse<CssVar>(actions, {dispatchResponse: false}),
    createManyCatchError<CssVar>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<CssVar>(this.service),
    editResponse<CssVar>(actions, {dispatchResponse: false}),
    editCatchError<CssVar>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<CssVar>(this.service),
    editManyResponse<CssVar>(actions, {dispatchResponse: false}),
    editManyCatchError<CssVar>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<CssVar>(this.service),
    selectResponse<CssVar>(actions, {dispatchResponse: false}),
    selectCatchError<CssVar>(actions),
    repeat()
  ));

  constructor(private readonly actions$: Actions, private readonly service: CssVarService) {
  }

}

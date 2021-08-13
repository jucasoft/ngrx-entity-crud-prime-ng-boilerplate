import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Coin} from '@models/vo/coin';
import {CoinService} from '@services/coin.service';
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
export class CoinStoreEffects {

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<Coin>(this.service),
    searchResponse<Coin>(actions, {dispatchResponse: false}),
    searchCatchError<Coin>(actions),
    repeat()
  ));


  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<Coin>(this.service),
    deleteResponse<Coin>(actions, Coin, {dispatchResponse: false}),
    deleteCatchError<Coin>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<Coin>(this.service),
    deleteManyResponse<Coin>(actions, Coin, {dispatchResponse: false}),
    deleteManyCatchError<Coin>(actions),
    repeat()
  ));
  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<Coin>(this.service),
    createResponse<Coin>(actions, {dispatchResponse: false}),
    createCatchError<Coin>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<Coin>(this.service),
    createManyResponse<Coin>(actions, {dispatchResponse: false}),
    createManyCatchError<Coin>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<Coin>(this.service),
    editResponse<Coin>(actions, {dispatchResponse: false}),
    editCatchError<Coin>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<Coin>(this.service),
    editManyResponse<Coin>(actions, {dispatchResponse: false}),
    editManyCatchError<Coin>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<Coin>(this.service),
    selectResponse<Coin>(actions, {dispatchResponse: false}),
    selectCatchError<Coin>(actions),
    repeat()
  ));

  constructor(private readonly actions$: Actions, private readonly service: CoinService) {
  }
  
}

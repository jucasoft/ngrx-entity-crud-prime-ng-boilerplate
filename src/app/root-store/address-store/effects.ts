import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Address} from '@models/vo/address';
import {AddressService} from '@services/address.service';
import {searchCall, searchCatchError, searchResponse} from 'ngrx-entity-crud';
import {repeat, tap} from 'rxjs/operators';
import {applyHandlerStackTraceOfType} from '@core/utils/aigor';

@Injectable()
export class AddressStoreEffects {

  ofType = new Proxy(ofType, applyHandlerStackTraceOfType);

  constructor(private readonly actions$: Actions, private readonly service: AddressService) {
  }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    this.ofType(actions.SearchRequest),
    searchCall<Address>(this.service),
    searchResponse<Address>(actions, {dispatchResponse: false}),
    searchCatchError<Address>(actions),
    repeat()
  ));
  //
  // deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
  //   ofType(actions.DeleteRequest),
  //   deleteCall<Address>(this.service),
  //   deleteResponse<Address>(actions, Address, {dispatchResponse: false}),
  //   deleteCatchError<Address>(actions),
  //   repeat()
  // ));
  //
  // createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
  //   ofType(actions.CreateRequest),
  //   createCall<Address>(this.service),
  //   createResponse<Address>(actions, {dispatchResponse: false}),
  //   createCatchError<Address>(actions),
  //   repeat()
  // ));
  //
  // editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
  //   ofType(actions.EditRequest),
  //   editCall<Address>(this.service),
  //   editResponse<Address>(actions, {dispatchResponse: false}),
  //   editCatchError<Address>(actions),
  //   repeat()
  // ));
  //
  // selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
  //   ofType(actions.SelectRequest),
  //   selectCall<Address>(this.service),
  //   selectResponse<Address>(actions, {dispatchResponse: false}),
  //   selectCatchError<Address>(actions),
  //   repeat()
  // ));

}

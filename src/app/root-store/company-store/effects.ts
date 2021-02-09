import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Company} from '@models/vo/company';
import {CompanyService} from '@services/company.service';
import {searchCall, searchCatchError, searchResponse} from 'ngrx-entity-crud';
import {repeat, tap} from 'rxjs/operators';
import {applyHandlerStackTraceOfType} from '@core/utils/aigor';

@Injectable()
export class CompanyStoreEffects {

  ofType = new Proxy(ofType, applyHandlerStackTraceOfType);

  constructor(private readonly actions$: Actions, private readonly service: CompanyService) {
  }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    this.ofType(actions.SearchRequest),
    searchCall<Company>(this.service),
    searchResponse<Company>(actions, {dispatchResponse: false}),
    searchCatchError<Company>(actions),
    repeat()
  ));
  //
  // deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
  //   ofType(actions.DeleteRequest),
  //   deleteCall<Company>(this.service),
  //   deleteResponse<Company>(actions, Company, {dispatchResponse: false}),
  //   deleteCatchError<Company>(actions),
  //   repeat()
  // ));
  //
  // createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
  //   ofType(actions.CreateRequest),
  //   createCall<Company>(this.service),
  //   createResponse<Company>(actions, {dispatchResponse: false}),
  //   createCatchError<Company>(actions),
  //   repeat()
  // ));
  //
  // editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
  //   ofType(actions.EditRequest),
  //   editCall<Company>(this.service),
  //   editResponse<Company>(actions, {dispatchResponse: false}),
  //   editCatchError<Company>(actions),
  //   repeat()
  // ));
  //
  // selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
  //   ofType(actions.SelectRequest),
  //   selectCall<Company>(this.service),
  //   selectResponse<Company>(actions, {dispatchResponse: false}),
  //   selectCatchError<Company>(actions),
  //   repeat()
  // ));

}

import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './css-source.actions';
import {CssSource} from '@models/vo/css-source';
import {CssSourceService} from '@services/css-source.service';
import {createCall, createCatchError, createResponse, editCall, editCatchError, editResponse, selectCall, selectCatchError, selectResponse} from 'ngrx-entity-crud';
import {repeat} from 'rxjs/operators';

@Injectable()
export class CssSourceStoreEffects {

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<CssSource>(this.service),
    selectResponse<CssSource>(actions, {dispatchResponse: false}),
    selectCatchError<CssSource>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<CssSource>(this.service),
    createResponse<CssSource>(actions, {dispatchResponse: false}),
    createCatchError<CssSource>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<CssSource>(this.service),
    editResponse<CssSource>(actions, {dispatchResponse: false}),
    editCatchError<CssSource>(actions),
    repeat()
  ));

  constructor(private readonly actions$: Actions, private readonly service: CssSourceService) {
  }

}

import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {User} from '@models/vo/user';
import {UserService} from '@services/user.service';
import {
  createCall, createCatchError, createResponse,
  deleteCall, deleteCatchError, deleteResponse,
  editCall, editCatchError, editResponse,
  searchCall, searchCatchError, searchResponse,
  selectCall, selectCatchError, selectResponse
} from 'ngrx-entity-crud';
import {repeat} from 'rxjs/operators';

@Injectable()
export class UserStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: UserService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<User>(this.service),
    searchResponse<User>(actions, {dispatchResponse: false}),
    searchCatchError<User>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<User>(this.service),
    deleteResponse<User>(actions, User, {dispatchResponse: false}),
    deleteCatchError<User>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<User>(this.service),
    createResponse<User>(actions, {dispatchResponse: false}),
    createCatchError<User>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<User>(this.service),
    editResponse<User>(actions, {dispatchResponse: false}),
    editCatchError<User>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<User>(this.service),
    selectResponse<User>(actions, {dispatchResponse: false}),
    selectCatchError<User>(actions),
    repeat()
  ));

}

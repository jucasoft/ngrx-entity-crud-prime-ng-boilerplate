import {ActionCreator, createAction, props} from '@ngrx/store';
import {ICriteria, TypedAction} from 'ngrx-entity-crud';

export enum ActionTypes {
  QUERY_REQUEST = '[Graphql] Query request',
  QUERY_FAILURE = '[Graphql] Query failure',
  QUERY_SUCCESS = '[Graphql] Query success',
  MUTATE_REQUEST = '[Graphql] Mutate request',
  MUTATE_FAILURE = '[Graphql] Mutate failure',
  MUTATE_SUCCESS = '[Graphql] Mutate success',
}

export const QueryRequest = createAction(ActionTypes.QUERY_REQUEST, props<ICriteria>());
export const QueryFailure = createAction(ActionTypes.QUERY_FAILURE, props<{ error: string }>());
export const QuerySuccess = createAction(ActionTypes.QUERY_SUCCESS, props<{ items: any[], request: ICriteria }>());

export const MutateRequest = createAction(ActionTypes.MUTATE_REQUEST, props<ICriteria>());
export const MutateFailure = createAction(ActionTypes.MUTATE_FAILURE, props<{ error: string }>());
export const MutateSuccess = createAction(ActionTypes.MUTATE_SUCCESS, props<{ items: any[], request: ICriteria }>());

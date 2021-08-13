import {initialState} from './state';
import {createReducer, on} from '@ngrx/store';
import * as actions from './actions';

export const featureReducer = createReducer(initialState,
  on(actions.QueryRequest, (state, ICriteria) => ({...state})),
  on(actions.QueryFailure, (state, {error: string}) => ({...state})),
  on(actions.QuerySuccess, (state, {items: any, request: ICriteria}) => ({...state})),
  on(actions.MutateRequest, (state, ICriteria) => ({...state})),
  on(actions.MutateFailure, (state, {error: string}) => ({...state})),
  on(actions.MutateSuccess, (state, {items: any, request: ICriteria}) => ({...state})),
);

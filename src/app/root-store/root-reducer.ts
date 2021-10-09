import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {State} from '@root-store/state';
import {environment} from '../../environments/environment';
import {localStorageSync} from 'ngrx-store-localstorage';


export interface AppState {
}

export function myMetaReducer(
  reducer: ActionReducer<State>
): ActionReducer<State> {
  return function (state, action) {
    console.log('ROOT REDUCER');
    console.log('action.type', action.type);
    console.log('state', state);
    return reducer(state, action);
  };
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['css_name', 'css_source'], rehydrate: true})(reducer);
}

export const reducers: ActionReducerMap<AppState> = {};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [localStorageSyncReducer] : [localStorageSyncReducer];

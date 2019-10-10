import {initialState, State} from './state';
import {RouterCancelAction, RouterErrorAction, RouterGoPerformed, RouterNavigationAction} from './actions';
import {createReducer, on} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';


export const featureReducer = createReducer<State>(initialState,
  on(RouterGoPerformed, (state, {extras}) => {
    return ({...state, ...{extras}});
  }),
  on(RouterCancelAction,
    RouterErrorAction,
    RouterNavigationAction, (stateA, action) => {
      const {state, navigationId} = (routerReducer(stateA, action) as State);
      return {...(routerReducer(stateA, action) as State), ...{extras: action.extras || stateA.extras}};
    })
);

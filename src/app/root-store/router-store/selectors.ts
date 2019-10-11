import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import {RouterReducerState} from '@ngrx/router-store';
import {Data, NavigationExtras, Params} from '@angular/router';
import {State} from './state';
import {evalData} from '@core/utils/j-utils';

export const selectRouterState: MemoizedSelector<object, RouterReducerState> = createFeatureSelector<RouterReducerState>('router');
const getOptions = (state: State): any => state.state.root.firstChild.params.options;

const getHasPopUp = (state: State): any => evalData<string>(() => state.state.url, '').indexOf('//popUp') !== -1;

const getExtra = (state: State): NavigationExtras => state.extras;

export const selectOptions: MemoizedSelector<object, any> = createSelector(
  selectRouterState,
  getOptions
);

export const selectExtra: MemoizedSelector<object, NavigationExtras> = createSelector(
  selectRouterState,
  getExtra
);

export const hasPopUp: MemoizedSelector<object, NavigationExtras> = createSelector(
  selectRouterState,
  getHasPopUp
);

export const {
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(selectRouterState);

export const all: MemoizedSelector<object, RuoteData> = createSelector(
  selectQueryParams,
  selectRouteParams,
  selectRouteData,
  selectUrl,
  (selectQueryParamsA, selectRouteParamsA, selectRouteDataA, selectUrlA) => {
    return {
      selectQueryParams: selectQueryParamsA,
      selectRouteParams: selectRouteParamsA,
      selectRouteData: selectRouteDataA,
      selectUrl: selectUrlA
    };
  }
);

export interface RuoteData {
  selectQueryParams: Params;
  selectRouteParams: Params;
  selectRouteData: Data;
  selectUrl: string;
}


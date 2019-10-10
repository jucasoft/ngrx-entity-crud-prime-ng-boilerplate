import {NavigationExtras} from '@angular/router';
import {createAction, props} from '@ngrx/store';
import {ROUTER_CANCEL, ROUTER_ERROR, ROUTER_NAVIGATION} from '@ngrx/router-store';

export const RouterCancelAction = createAction(ROUTER_CANCEL, props<{
  path: any[];
  queryParams?: object;
  extras?: NavigationExtras;
}>());
export const RouterErrorAction = createAction(ROUTER_ERROR, props<{
  path: any[];
  queryParams?: object;
  extras?: NavigationExtras;
}>());
export const RouterNavigationAction = createAction(ROUTER_NAVIGATION, props<{
  path: any[];
  queryParams?: object;
  extras?: NavigationExtras;
}>());

export const RouterGo = createAction(`[Router] Go`, props<{
  path: any[];
  queryParams?: object;
  extras?: NavigationExtras;
}>());

export const RouterGoPerformed = createAction(`[Router] Go performed`, props<{
  path: any[];
  queryParams?: object;
  extras?: NavigationExtras;
}>());

export const RouterBack = createAction(`[Router] Back`);
export const RouterForward = createAction(`[Router] Forward`);
export const RouteChange = createAction(`[Router] Route Change`, props<{ params: any, path: string }>());

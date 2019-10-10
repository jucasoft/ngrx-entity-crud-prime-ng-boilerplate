import {RouterReducerState, SerializedRouterStateSnapshot} from '@ngrx/router-store';
import {NavigationExtras} from '@angular/router';

export interface State extends RouterReducerState<SerializedRouterStateSnapshot> {
  extras: NavigationExtras;
}

export const initialState: State = {
  state: null,
  navigationId: null,
  extras: null,
};

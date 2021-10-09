import {EntitySingleCrudState, getInitialSingleCrudState} from 'ngrx-entity-crud';
import {CssSource} from '@models/vo/css-source';


export interface State extends EntitySingleCrudState<CssSource> {
}

export const initialState: State = getInitialSingleCrudState<CssSource>();

import {actions} from './css-source.actions';
import {initialState, State} from './css-source.state';
import {createReducer} from '@ngrx/store';
import {createSingleCrudOns} from 'ngrx-entity-crud';
import {CssSource} from '@models/vo/css-source';

// export const featureReducer = adapter.createCrudReducer(initialState, actions);

/*
// example code
const predicate = (criteria: ICriteria) => (value) => {
  const {queryParams} = criteria;
  // return value.companyId === queryParams.companyId;
  return true;
};

// example code
const customSearchSuccessOn = on(actions.SearchSuccess, (state: State, {type, items, request}) => {
  const newState = adapter.removeMany(
    predicate(request),
    {
      ...state,
      isLoaded: true,
      isLoading: false,
      error: null
    }
  );

  return adapter.addMany(
    items, newState
  );
});
*/

// example code
const {...ons} = createSingleCrudOns<CssSource, State>(initialState as any, actions);
export const featureReducer = createReducer<State>(initialState, ...Object.values(ons));

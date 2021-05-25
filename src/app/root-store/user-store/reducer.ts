import {actions} from './actions';
import {adapter, initialState, State} from './state';
import {createReducer, on} from '@ngrx/store';
import {createCrudOns, ICriteria} from 'ngrx-entity-crud';

// export const featureReducer = adapter.createCrudReducer(initialState, actions);

const predicate = (criteria: ICriteria) => (value) => {
  const {queryParams} = criteria;
  return value.companyId === queryParams.companyId;
};

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

const {
  responseOn,
  resetResponsesOn,
  searchRequestOn,
  deleteRequestOn,
  editRequestOn,
  createRequestOn,
  selectRequestOn,
  // searchSuccessOn,
  deleteSuccessOn,
  createSuccessOn,
  selectSuccessOn,
  editSuccessOn,
  searchFailureOn,
  deleteFailureOn,
  createFailureOn,
  selectFailureOn,
  editFailureOn,
  resetOn,
  filtersOn,
  selectItemsOn,
  selectItemOn,
  editOn,
  createOn,
  deleteOn
} = createCrudOns(adapter, initialState, actions);

export const featureReducer = createReducer<State>(initialState,
  // responseOn,
  resetResponsesOn,
  // searchRequestOn,
  deleteRequestOn,
  editRequestOn,
  createRequestOn,
  selectRequestOn,
  // searchSuccessOn,
  (customSearchSuccessOn as any),
  deleteSuccessOn,
  createSuccessOn,
  selectSuccessOn,
  editSuccessOn,
  searchFailureOn,
  deleteFailureOn,
  createFailureOn,
  selectFailureOn,
  editFailureOn,
  resetOn,
  filtersOn,
  selectItemsOn,
  selectItemOn,
  editOn,
  createOn,
  deleteOn
);

import {actions} from './actions';
import {adapter, initialState, State} from './state';
import {createReducer, on} from '@ngrx/store';
import {createCrudOns} from 'ngrx-entity-crud';
import {ICriteria} from 'ngrx-entity-crud';

// export const featureReducer = adapter.createCrudReducer(initialState, actions);

const predicate = (criteria: ICriteria) => (value) => {
  const {queryParams} = criteria;

  return true;
};

const customSearchSuccessOn = on(actions.SearchSuccess, (state: State, {type, items, request}) => {
  console.log('createCrudOns()');

  // cancello gli elementi gia` presenti in base al tipo di ricerca effettuata.
  // recupero il Criteria utilizzato per la chiamata

  const newState = adapter.removeMany(predicate(request),
    {
      ...state,
      isLoaded: true,
      isLoading: false,
      error: null
    }
  );

  return adapter.upsertMany(
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
  responseOn,
  resetResponsesOn,
  searchRequestOn,
  deleteRequestOn,
  editRequestOn,
  createRequestOn,
  selectRequestOn,
  // searchSuccessOn,
  customSearchSuccessOn,
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

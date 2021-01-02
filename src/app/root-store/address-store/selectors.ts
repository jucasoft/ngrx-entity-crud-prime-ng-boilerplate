import {adapter, State} from './state';
import {createFeatureSelector, MemoizedSelector} from '@ngrx/store';
import {Names} from './names';

export const selectState: MemoizedSelector<object, State> = createFeatureSelector<State>(Names.NAME);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
  selectItemSelected,
  selectItemsSelected,
  selectLastCriteria,
  selectError,
  selectIsLoading,
  selectIsLoaded,
  selectFilters,
  selectFilteredItems
} = adapter.getCrudSelectors(selectState);

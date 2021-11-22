import {createFeatureSelector, MemoizedSelector} from '@ngrx/store';

import {adapter, State} from './css-var.state';
import {Names} from './css-var.names';

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
  selectFilteredItems,
  selectIdSelected,
  selectIdsSelected,
  selectItemSelectedOrigin,
  selectEntitiesSelected,
  selectItemsSelectedOrigin,
  selectResponses,
} = adapter.getCrudSelectors(selectState);

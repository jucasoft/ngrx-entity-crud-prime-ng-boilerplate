import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {adapter, State} from './state';
import {Names} from './names';
import {Dictionary} from '@ngrx/entity';
import {UserStoreSelectors} from '@root-store/user-store/index';
import {User} from '@models/vo/user';
import {Comment} from '@models/vo/comment';

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

import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {adapter, State} from './state';
import {Names} from './names';
import {User} from '@models/vo/user';

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

export const selectFromCompanyId = createSelector(
  selectAll,
  (values: User[], option: { companyId: string }): User[] => {
    return values.filter(value => value.companyId === option.companyId);
  }
);


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

const handler = {
  apply: function (target, thisArg, argumentsList) {
    console.log(`Calculate sum: ${argumentsList}`);
    // expected output: "Calculate sum: 1,2"
    return target(argumentsList[0], argumentsList[1]) * 10;
  }
};

export const selectFromCompanyId = createSelector(
  selectAll,
  new Proxy<(values: User[], option: { companyId: string }) => User[]>((values: User[], option: { companyId: string }): User[] => {
    return values.filter(value => value.companyId === option.companyId);
  }, handler)
);


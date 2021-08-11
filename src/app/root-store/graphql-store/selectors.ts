import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {Names} from './names';
import {Graphql} from '@models/vo/graphql';

const getValueA = (state: Graphql): string => state.valueA;
const getValueB = (state: Graphql): string => state.valueB;

export const selectState: MemoizedSelector<object, Graphql> = createFeatureSelector<Graphql>(Names.NAME);

export const selectValueA: MemoizedSelector<object, string> = createSelector(
  selectState,
  getValueA
);

export const selectValueB: MemoizedSelector<object, string> = createSelector(
  selectState,
  getValueB
);

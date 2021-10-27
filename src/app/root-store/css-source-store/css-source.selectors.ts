import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {State} from './css-source.state';
import {Names} from './css-source.names';

import {getSingeCrudSelectors} from 'ngrx-entity-crud';
import {CssSource} from '@models/vo/css-source';

export const selectState: MemoizedSelector<object, State> = createFeatureSelector<State>(Names.NAME);
export const {
  selectItem,
  selectLastCriteria,
  selectError,
  selectIsLoading,
  selectIsLoaded,
  selectResponses,
} = getSingeCrudSelectors<CssSource, object>(selectState)

const getRootVars: (item: CssSource) => { [key: string]: string } = (item: CssSource) => item.children[':root'].attributes;

export const selectRootVarsObj: MemoizedSelector<object, any> = createSelector(
  selectItem,
  getRootVars
);

export const selectRootVarsArray: MemoizedSelector<object, any> = createSelector(
  selectRootVarsObj,
  (varsObj: { [key: string]: string }) => {
    return Object.keys(varsObj).map((key, id) => ({id, key, value: varsObj[key]}))
  }
);

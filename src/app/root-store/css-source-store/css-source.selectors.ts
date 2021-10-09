import {createFeatureSelector, MemoizedSelector} from '@ngrx/store';

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


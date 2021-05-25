import {createFeatureSelector, createSelector, MemoizedSelector, select} from '@ngrx/store';
import {adapter, State} from './state';
import {Names} from './names';
import {User} from '@models/vo/user';
import {Dictionary} from '@ngrx/entity';
import {Comment} from '@models/vo/comment';
import {CommentStoreSelectors} from '@root-store/comment-store/index';
import {pipe} from 'rxjs';
import {map, scan} from 'rxjs/operators';
import {evalData} from '@core/utils/j-utils';

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

export const selectToCommentEntities: MemoizedSelector<any, Dictionary<User>> = createSelector(
  selectEntities,
  CommentStoreSelectors.selectAll,
  (userDictionary: Dictionary<User>, sourceB: Comment[]): Dictionary<User> => {
    const sourceBMap = sourceB.reduce((prev, curr) => {
      prev[curr.author] = curr; // <+ creo una mappa che ha per key, l'id dell'autore
      return prev;
    }, {});

    const keys = Object.keys(sourceBMap);

    const resultA = keys.reduce((prev, key) => {
      const user = userDictionary[key];
      prev[key] = {
        ...user,
        comment: sourceBMap[key]
      };
      return prev;
    }, {});
    const result = {...userDictionary, ...resultA};
    console.log('result.length', Object.keys(result).length);
    return result;
  }
);

export const selectToCommentAll = createSelector(
  selectToCommentEntities,
  (entities: Dictionary<User>) => Object.values(entities)
)

export const selectToCommentAll$ = () => {
  return pipe(
    select(selectToCommentEntities),
    scan((acc, value) => {
      const keys = Object.keys(acc);
      if (keys.length === 0) {
        return value;
      }
      return keys.reduce((prev: any, key: string) => {
        const prevIten = acc[key];
        const newIten = value[key];
        if (evalData(() => prevIten.comment === newIten.comment, false)) {
          prev[key] = prevIten;
        } else {
          prev[key] = {...newIten};
        }
        return prev;
      }, {});
    }, {} as Dictionary<User>),
    map(value => Object.values(value) as User[])
  );
};

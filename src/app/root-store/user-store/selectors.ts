import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {adapter, State} from './state';
import {Names} from './names';
import {User} from '@models/vo/user';
import {Dictionary} from '@ngrx/entity';
import {Comment} from '@models/vo/comment';
import {CommentStoreSelectors} from '@root-store/comment-store/index';

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

export const selectUserToCommentEntities: MemoizedSelector<any, Dictionary<User>> = createSelector(
  selectEntities,
  CommentStoreSelectors.selectAll,
  (userDictionary: Dictionary<User>, sourceB: Comment[]): Dictionary<User> => {
    const sourceBMap = sourceB.reduce((prev, curr) => {
      prev[curr.author] = curr; // <+ creo una mappa che ha per key, l'id dell'autore
      return prev;
    }, {});

    const keys = Object.keys(sourceBMap);

    const result = keys.reduce((prev, key) => {
      const user = userDictionary[key];
      prev[key] = {
        ...user,
        comment: sourceBMap[key]
      };
      return prev;
    }, {});

    return {...userDictionary, ...result};
  }
);

export const selectUserToCommentAll = createSelector(
  selectUserToCommentEntities,
  (entities: Dictionary<User>) => Object.values(entities)
)

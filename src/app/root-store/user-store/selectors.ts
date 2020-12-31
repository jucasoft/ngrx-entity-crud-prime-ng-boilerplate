import {createFeatureSelector, MemoizedSelector} from '@ngrx/store';

import {adapter, State} from './state';
import {Names} from './names';
import {relatedEntity, rootEntities, rootEntity} from 'ngrx-entity-relationship';
import {CompanyStoreSelectors} from '@root-store/company-store';
import {AddressStoreSelectors} from '@root-store/address-store';

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

export const selectUser = rootEntity(
  selectState, // the selector of the user's feature.

  // now we define a relationship between a user and a company.
  relatedEntity(
    CompanyStoreSelectors.selectState, // a selector of the company's feature.
    'companyId', // the key in the user's model that points to the company's id.
    'company', // the key in the user's model that should be fulfilled with the company's entity.

    // now we define a relationship between a company and an address.
    relatedEntity(
      AddressStoreSelectors.selectState, // a selector of the address's feature.
      'addressId', // the key in the company's model that points to the address's id.
      'address', // the key in the company's model that should be fulfilled with the address's entity.
    ),
  ),
);

export const selectUsers = rootEntities(
  selectUser, // simply pass here a select for a single entity.
);

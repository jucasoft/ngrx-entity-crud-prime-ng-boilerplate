import {childrenEntities, relatedEntity, rootEntities, rootEntity} from 'ngrx-entity-relationship';
import {selectState as selectUserState} from './selectors';
import {selectState as selectCompanyState} from '@root-store/company-store/selectors';
import {selectState as selectAddressState} from '@root-store/address-store/selectors';

export const selectUser = rootEntity(
  selectUserState, // the selector of the user's feature.

  // now we define a relationship between a user and a company.
  relatedEntity(
    selectCompanyState, // a selector of the company's feature.
    'companyId', // the key in the user's model that points to the company's id.
    'company', // the key in the user's model that should be fulfilled with the company's entity.

    // now we define a relationship between a company and an address.
    relatedEntity(
      selectAddressState, // a selector of the address's feature.
      'addressId', // the key in the company's model that points to the address's id.
      'address', // the key in the company's model that should be fulfilled with the address's entity.
    ),

    // nested staff
    childrenEntities(
      selectUserState,
      'companyId',
      'staff',
    ),
  ),
);

export const selectUsers = rootEntities(
  selectUser, // simply pass here a select for a single entity.
);

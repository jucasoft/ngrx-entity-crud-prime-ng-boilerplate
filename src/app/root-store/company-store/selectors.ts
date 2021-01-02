import { selectUserState } from '@root-store/user-store/state';
import { childrenEntities, rootEntity } from 'ngrx-entity-relationship';

import { adapter, selectCompanyState } from './state';

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
} = adapter.getCrudSelectors(selectCompanyState);

const companyWithEmployees = rootEntity(
  selectCompanyState,
  childrenEntities( // childrenEntities searches for suitable users based on companyId == company.id.
    selectUserState,
    'companyId',
    'staff',
  ),
);

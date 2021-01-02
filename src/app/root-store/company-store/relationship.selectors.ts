import {childrenEntities, rootEntity} from 'ngrx-entity-relationship';
import {selectState as selectUserState} from '@root-store/user-store/selectors';
import {selectState} from '@root-store/company-store/selectors';

const companyWithEmployees = rootEntity(
  selectState,
  childrenEntities( // childrenEntities searches for suitable users based on companyId == company.id.
    selectUserState,
    'companyId',
    'staff',
  ),
);

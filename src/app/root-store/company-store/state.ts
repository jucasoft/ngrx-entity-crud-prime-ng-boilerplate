import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Company} from '@models/vo/company';

export const adapter: EntityCrudAdapter<Company> = createCrudEntityAdapter<Company>({
	selectId: model => Company.selectId(model),
});

export interface State extends EntityCrudState<Company> {
};

export const initialState: State = adapter.getInitialCrudState();

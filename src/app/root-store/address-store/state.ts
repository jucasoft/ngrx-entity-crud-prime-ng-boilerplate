import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Address} from '@models/vo/address';

export const adapter: EntityCrudAdapter<Address> = createCrudEntityAdapter<Address>({
	selectId: model => Address.selectId(model),
});

export interface State extends EntityCrudState<Address> {
};

export const initialState: State = adapter.getInitialCrudState();

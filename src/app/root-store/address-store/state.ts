import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { Names } from '@root-store/address-store/names';
import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Address} from '@models/vo/address';

export const adapter: EntityCrudAdapter<Address> = createCrudEntityAdapter<Address>({
	selectId: model => Address.selectId(model),
});

export interface State extends EntityCrudState<Address> {
};

export const initialState: State = adapter.getInitialCrudState();

export const selectAddressState: MemoizedSelector<object, State> = createFeatureSelector<State>(Names.NAME);

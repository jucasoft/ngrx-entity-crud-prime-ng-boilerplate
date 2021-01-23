import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Coin} from '@models/vo/coin';

export const adapter: EntityCrudAdapter<Coin> = createCrudEntityAdapter<Coin>({
	selectId: model => Coin.selectId(model),
});

export interface State extends EntityCrudState<Coin> {
};

export const initialState: State = adapter.getInitialCrudState();

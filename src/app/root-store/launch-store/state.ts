import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Launch} from '@models/vo/launch';

export const adapter: EntityCrudAdapter<Launch> = createCrudEntityAdapter<Launch>({
	selectId: model => Launch.selectId(model),
});

export interface State extends EntityCrudState<Launch> {
};

export const initialState: State = adapter.getInitialCrudState();

import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {CssVar} from '@models/vo/css-var';

export const adapter: EntityCrudAdapter<CssVar> = createCrudEntityAdapter<CssVar>({
	selectId: model => CssVar.selectId(model),
});

export interface State extends EntityCrudState<CssVar> {
};

export const initialState: State = adapter.getInitialCrudState();

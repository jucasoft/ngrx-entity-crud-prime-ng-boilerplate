import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {CssItem} from '@models/vo/css-item';

export const adapter: EntityCrudAdapter<CssItem> = createCrudEntityAdapter<CssItem>({
	selectId: model => CssItem.selectId(model),
});

export interface State extends EntityCrudState<CssItem> {
};

export const initialState: State = adapter.getInitialCrudState();

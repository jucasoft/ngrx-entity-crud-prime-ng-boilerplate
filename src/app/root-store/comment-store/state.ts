import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Comment} from '@models/vo/comment';

export const adapter: EntityCrudAdapter<Comment> = createCrudEntityAdapter<Comment>({
	selectId: model => Comment.selectId(model),
});

export interface State extends EntityCrudState<Comment> {
};

export const initialState: State = adapter.getInitialCrudState();

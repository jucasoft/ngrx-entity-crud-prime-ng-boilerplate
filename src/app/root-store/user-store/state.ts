import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { Names } from '@root-store/user-store/names';
import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {User} from '@models/vo/user';

export const adapter: EntityCrudAdapter<User> = createCrudEntityAdapter<User>({
	selectId: model => User.selectId(model),
});

export interface State extends EntityCrudState<User> {
};

export const initialState: State = adapter.getInitialCrudState();

export const selectUserState: MemoizedSelector<object, State> = createFeatureSelector<State>(Names.NAME);

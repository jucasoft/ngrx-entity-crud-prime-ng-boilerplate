import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { Names } from '@root-store/company-store/names';
import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Company} from '@models/vo/company';

export const adapter: EntityCrudAdapter<Company> = createCrudEntityAdapter<Company>({
	selectId: model => Company.selectId(model),
});

export interface State extends EntityCrudState<Company> {
};

export const initialState: State = adapter.getInitialCrudState();

export const selectCompanyState: MemoizedSelector<object, State> = createFeatureSelector<State>(Names.NAME);

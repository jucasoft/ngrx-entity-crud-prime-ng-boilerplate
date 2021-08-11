import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {GraphqlStoreEffects} from './effects';
import {featureReducer} from './reducer';
import {Graphql} from '@models/vo/graphql';
import {Names} from './names';

export const INJECTION_TOKEN = new InjectionToken<ActionReducer<Graphql>>(`${Names.NAME}-store Reducers`);

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(Names.NAME, INJECTION_TOKEN),
		EffectsModule.forFeature([GraphqlStoreEffects]),
	],
	declarations: [],
	providers: [GraphqlStoreEffects,
		{
			provide: INJECTION_TOKEN,
			useFactory: (): ActionReducer<Graphql> => featureReducer
		}]
})
export class GraphqlStoreModule {
}

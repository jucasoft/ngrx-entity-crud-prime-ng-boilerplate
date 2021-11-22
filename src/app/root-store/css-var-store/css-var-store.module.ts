import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CssVarStoreEffects} from './css-var.effects';
import {featureReducer} from './css-var.reducer';
import {State} from './css-var.state';
import {Names} from './css-var.names';

export const INJECTION_TOKEN = new InjectionToken<ActionReducer<State>>(`${Names.NAME}-store Reducers`);

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(Names.NAME, INJECTION_TOKEN),
		EffectsModule.forFeature([CssVarStoreEffects]),
	],
	declarations: [],
	providers: [CssVarStoreEffects,
		{
			provide: INJECTION_TOKEN,
			useFactory: (): ActionReducer<State> => featureReducer
		}]
})
export class CssVarStoreModule {
}

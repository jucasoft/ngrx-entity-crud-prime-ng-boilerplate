import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CssSourceStoreEffects} from './css-source.effects';
import {featureReducer} from './css-source.reducer';
import {State} from './css-source.state';
import {Names} from './css-source.names';

export const INJECTION_TOKEN = new InjectionToken<ActionReducer<State>>(`${Names.NAME}-store Reducers`);

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(Names.NAME, INJECTION_TOKEN),
    EffectsModule.forFeature([CssSourceStoreEffects]),
  ],
  declarations: [],
  providers: [CssSourceStoreEffects,
    {
      provide: INJECTION_TOKEN,
      useFactory: (): ActionReducer<State> => featureReducer
    }]
})
export class CssSourceStoreModule {
}

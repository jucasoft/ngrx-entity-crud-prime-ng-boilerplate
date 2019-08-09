import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JsonFormPipe} from '@core/pipe/json-form.pipe';
import {PercentageWidthPipe} from '@core/pipe/percentage-width.pipe';
import {SplitPipe} from '@core/pipe/split.pipe';
import {ValidatorClassPipe} from '@core/pipe/validator-class.pipe';
import {ValidatorMessagePipe} from '@core/pipe/validator-message.pipe';
import {WarnsIsValidPipe} from '@core/pipe/warns-is-valid.pipe';
import {DifferenceWidthPipe} from '@core/pipe/difference-width.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    JsonFormPipe,
    PercentageWidthPipe,
    SplitPipe,
    ValidatorClassPipe,
    ValidatorMessagePipe,
    WarnsIsValidPipe,
    DifferenceWidthPipe
  ],
  exports: [
    JsonFormPipe,
    PercentageWidthPipe,
    SplitPipe,
    ValidatorClassPipe,
    ValidatorMessagePipe,
    WarnsIsValidPipe,
    CommonModule,
    DifferenceWidthPipe
  ]
})
export class PipesModule {
  static forRoot() {
    return {
      ngModule: PipesModule,
      providers: [],
    };
  }
}

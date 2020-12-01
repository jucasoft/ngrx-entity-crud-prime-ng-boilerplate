import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormErrorMsgComponent} from '@core/components/form-error-msg/form-error-msg.component';

@NgModule({
  declarations: [FormErrorMsgComponent],
  exports: [FormErrorMsgComponent],
  imports: [
    CommonModule
  ]
})
export class FormErrorMsgModule {
}

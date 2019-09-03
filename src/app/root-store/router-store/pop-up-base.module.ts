import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {PipesModule} from '@core/pipe/pipes.module';
import {DialogModule, InputTextModule} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [PopUpBaseComponent],
  imports: [
    CommonModule,
    DialogModule,
    PipesModule.forRoot(),
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  entryComponents: [],
  exports: [PopUpBaseComponent]
})
export class PopUpBaseModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxEntityCrudTestComponent } from './ngrx-entity-crud-test.component';

@NgModule({
  declarations: [NgrxEntityCrudTestComponent],
  imports: [
    CommonModule
  ],
  exports: [NgrxEntityCrudTestComponent]
})
export class NgrxEntityCrudTestModule { }

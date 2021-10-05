import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditorMainComponent} from './editor-main/editor-main.component';
import {EditorRoutingModule} from './editor-routing.module';
import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';
import {RippleModule} from 'primeng/ripple';
import {DropdownModule} from 'primeng/dropdown';
import {NgLetModule} from '@core/directive/ng-let.directive';

@NgModule({
  declarations: [
    EditorMainComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditorRoutingModule,
    FileUploadModule,
    TableModule,
    RippleModule,
    DropdownModule,
    NgLetModule
  ],
  providers: [],
  entryComponents: []
})
export class EditorModule {
}

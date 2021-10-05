import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CssItemEditComponent} from './css-item-edit/css-item-edit.component';
import {CssItemMainComponent} from './css-item-main/css-item-main.component';
import {CssItemListComponent} from './css-item-list/css-item-list.component';
import {CssItemRoutingModule} from './css-item-routing.module';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';
import {ButtonEditManyTestCssItemComponent} from './components/button-edit-many-test-css-item.component';
import {NgLetModule} from '@core/directive/ng-let.directive';
import {ToolbarModule} from 'primeng/toolbar';
import {RippleModule} from 'primeng/ripple';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    CssItemEditComponent,
    CssItemMainComponent,
    CssItemListComponent,
    ButtonEditManyTestCssItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DynamicDialogModule,
    ReactiveFormsModule,
    CssItemRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    PipesModule,
    SearchModule,
    NgLetModule,
    ToolbarModule,
    RippleModule,
    DropdownModule
  ],
  providers: [],
  entryComponents: []
})
export class CssItemModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CompanyEditComponent} from './company-edit/company-edit.component';
import {CompanyMainComponent} from './company-main/company-main.component';
import {CompanyListComponent} from './company-list/company-list.component';
import {CompanyRoutingModule} from './company-routing.module';
import {ButtonNewCompanyComponent} from './components/button-new-company.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';

@NgModule({
  declarations: [
    CompanyEditComponent,
    CompanyMainComponent,
    CompanyListComponent,
    ButtonNewCompanyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompanyRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    PipesModule,
    SearchModule
  ],
  providers: [],
  entryComponents: []
})
export class CompanyModule {
}

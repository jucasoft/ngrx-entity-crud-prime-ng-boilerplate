import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddressEditComponent} from './address-edit/address-edit.component';
import {AddressMainComponent} from './address-main/address-main.component';
import {AddressListComponent} from './address-list/address-list.component';
import {AddressRoutingModule} from './address-routing.module';
import {ButtonNewAddressComponent} from './components/button-new-address.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';

@NgModule({
  declarations: [
    AddressEditComponent,
    AddressMainComponent,
    AddressListComponent,
    ButtonNewAddressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddressRoutingModule,
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
export class AddressModule {
}

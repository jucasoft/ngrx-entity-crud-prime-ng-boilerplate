import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeMainComponent} from './home-main/home-main.component';
import {HomeRoutingModule} from './home-routing.module';
import {PanelModule} from 'primeng/panel';
import {ChartModule} from 'primeng/chart';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [HomeMainComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    PanelModule,
    ChartModule,
    CardModule
  ],
  providers: [],
  entryComponents: []
})
export class HomeModule {
}

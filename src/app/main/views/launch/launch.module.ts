import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LaunchEditComponent} from './launch-edit/launch-edit.component';
import {LaunchMainComponent} from './launch-main/launch-main.component';
import {LaunchListComponent} from './launch-list/launch-list.component';
import {LaunchRoutingModule} from './launch-routing.module';
import {ButtonNewLaunchComponent} from './components/button-new-launch.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';
import {ButtonDeleteLaunchComponent} from './components/button-delete-launch.component';
import {ButtonEditManyTestLaunchComponent} from './components/button-edit-many-test-launch.component';
import {ButtonCreateManyTestLaunchComponent} from './components/button-create-many-test-launch.component';
import {NgLetModule} from '@core/directive/ng-let.directive';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  declarations: [
    LaunchEditComponent,
    LaunchMainComponent,
    LaunchListComponent,
    ButtonNewLaunchComponent,
    ButtonDeleteLaunchComponent,
    ButtonEditManyTestLaunchComponent,
    ButtonCreateManyTestLaunchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LaunchRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    PipesModule,
    SearchModule,
    NgLetModule,
    ToolbarModule
  ],
  providers: [],
  entryComponents: []
})
export class LaunchModule {
}

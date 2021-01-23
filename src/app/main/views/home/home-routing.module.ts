import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeMainComponent} from './home-main/home-main.component';
import {NgrxEntityCrudTestComponent} from '@views/home/ngrx-entity-crud-test/ngrx-entity-crud-test.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: HomeMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'test',
    component: NgrxEntityCrudTestComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}

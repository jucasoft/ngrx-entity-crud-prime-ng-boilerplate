import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyMainComponent} from './company-main/company-main.component';
import {CompanyEditComponent} from '@views/company/company-edit/company-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: CompanyMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: CompanyEditComponent,
    outlet: 'popUp',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CompanyRoutingModule {
}

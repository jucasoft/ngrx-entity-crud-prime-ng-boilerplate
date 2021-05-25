import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./main/views/home/home.module').then(m => m.HomeModule)},
  {path: 'user', loadChildren: () => import('./main/views/user/user.module').then(m => m.UserModule)},
  {path: 'company', loadChildren: () => import('./main/views/company/company.module').then(m => m.CompanyModule)},
  {path: 'address', loadChildren: () => import('./main/views/address/address.module').then(m => m.AddressModule)},
  {path: 'comment', loadChildren: () => import('./main/views/comment/comment.module').then(m => m.CommentModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

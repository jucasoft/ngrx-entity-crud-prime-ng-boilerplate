import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [{path: '', redirectTo: 'home', pathMatch: 'full'}, {path: 'home', loadChildren: () => import('./main/views/home/home.module').then(m => m.HomeModule)}, {path: 'editor', loadChildren: () => import('./main/views/editor/editor.module').then(m => m.EditorModule)},];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

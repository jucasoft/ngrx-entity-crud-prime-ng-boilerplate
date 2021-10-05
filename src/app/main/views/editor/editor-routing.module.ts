import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditorMainComponent} from './editor-main/editor-main.component';

const routes: Routes = [
  {
    path: 'main',
    component: EditorMainComponent,
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
export class EditorRoutingModule {
}

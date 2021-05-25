import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommentMainComponent} from './comment-main/comment-main.component';
import {CommentEditComponent} from '@views/comment/comment-edit/comment-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: CommentMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: CommentEditComponent,
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
export class CommentRoutingModule {
}

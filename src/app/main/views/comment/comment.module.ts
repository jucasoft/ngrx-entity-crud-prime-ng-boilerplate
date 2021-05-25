import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommentEditComponent} from './comment-edit/comment-edit.component';
import {CommentMainComponent} from './comment-main/comment-main.component';
import {CommentListComponent} from './comment-list/comment-list.component';
import {CommentRoutingModule} from './comment-routing.module';
import {ButtonNewCommentComponent} from './components/button-new-comment.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';
import {ButtonDeleteCommentComponent} from './components/button-delete-comment.component';
import {ButtonEditManyTestCommentComponent} from './components/button-edit-many-test-comment.component';
import {ButtonCreateManyTestCommentComponent} from './components/button-create-many-test-comment.component';
import {NgLetModule} from '@core/directive/ng-let.directive';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  declarations: [
    CommentEditComponent,
    CommentMainComponent,
    CommentListComponent,
    ButtonNewCommentComponent,
    ButtonDeleteCommentComponent,
    ButtonEditManyTestCommentComponent,
    ButtonCreateManyTestCommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommentRoutingModule,
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
export class CommentModule {
}

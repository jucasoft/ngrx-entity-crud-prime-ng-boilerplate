import {Injectable} from '@angular/core';
import {Comment} from '@models/vo/comment';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
	providedIn: 'root'
})
export class CommentService extends BaseCrudService<Comment> {
	public service = environment.webServiceUri + 'comment';
}

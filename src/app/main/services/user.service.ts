import {Injectable} from '@angular/core';
import {User} from '@models/vo/user';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
	providedIn: 'root'
})
export class UserService extends BaseCrudService<User> {
	public service = environment.webServiceUri + 'user';
}

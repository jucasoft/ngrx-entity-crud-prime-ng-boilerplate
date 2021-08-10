import {Injectable} from '@angular/core';
import {Launch} from '@models/vo/launch';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
	providedIn: 'root'
})
export class LaunchService extends BaseCrudService<Launch> {
	public service = environment.webServiceUri + 'launch';
}

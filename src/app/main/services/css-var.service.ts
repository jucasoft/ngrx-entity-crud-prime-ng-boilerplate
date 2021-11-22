import {Injectable} from '@angular/core';
import {CssVar} from '@models/vo/css-var';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
	providedIn: 'root'
})
export class CssVarService extends BaseCrudService<CssVar> {
	public service = environment.webServiceUri + 'css-var';
}

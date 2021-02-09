import {Injectable} from '@angular/core';
import {Company} from '@models/vo/company';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
	providedIn: 'root'
})
export class CompanyService extends BaseCrudService<Company> {
	public service = environment.webServiceUri + 'company'
  debug = false;
}

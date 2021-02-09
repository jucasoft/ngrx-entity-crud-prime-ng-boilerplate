import {Injectable} from '@angular/core';
import {Address} from '@models/vo/address';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
  providedIn: 'root'
})
export class AddressService extends BaseCrudService<Address> {
  public service = environment.webServiceUri + 'address';
  debug = false;
}

import {Injectable} from '@angular/core';
import {Coin} from '@models/vo/coin';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
	providedIn: 'root'
})
export class CoinService extends BaseCrudService<Coin> {
	public service = environment.webServiceUri + 'coin';
}

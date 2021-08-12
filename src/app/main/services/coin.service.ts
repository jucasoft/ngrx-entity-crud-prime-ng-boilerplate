import {Injectable} from '@angular/core';
import {Coin} from '@models/vo/coin';
import {environment} from '../../../environments/environment';
import {BaseCrudService, ICriteria, OptManyRequest, OptRequest, Response} from 'ngrx-entity-crud';
import {Observable} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CoinService extends BaseCrudService<Coin> {
	public service = environment.webServiceUri + 'coin';


  create(opt: OptRequest<Coin>): Observable<Response<Coin>> {
    return super.create(opt);
  }

  createMany(opt: OptManyRequest<Coin>): Observable<Response<Coin[]>> {
    return super.createMany(opt);
  }

  search(value?: ICriteria): Observable<Response<Coin[]>> {
    return super.search(value);
  }

  select(opt: OptRequest<Coin>): Observable<Response<Coin>> {
    return super.select(opt);
  }

  update(opt: OptRequest<Coin>): Observable<Response<Coin>> {
    return super.update(opt);
  }

  updateMany(opt: OptManyRequest<Coin>): Observable<Response<Coin[]>> {
    return super.updateMany(opt);
  }

  delete(opt: OptRequest<Coin>): Observable<Response<string>> {
    return super.delete(opt);
  }

  deleteMany(opt: OptManyRequest<Coin>): Observable<Response<string[]>> {
    return super.deleteMany(opt);
  }
}

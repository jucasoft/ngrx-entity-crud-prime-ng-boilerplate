import {Injectable} from '@angular/core';
import {Coin} from '@models/vo/coin';
import {environment} from '../../../environments/environment';
import {BaseCrudService, OptManyRequest, OptRequest, Response} from 'ngrx-entity-crud';
import {Observable, of} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoinService extends BaseCrudService<Coin> {
  public service = environment.webServiceUri + 'coin';

  createMany(opt: OptManyRequest<Coin>): Observable<Response<any>> {
    console.log('CoinService.updateMany()');
    const result = opt.items.map(item => {
      const optB: OptRequest<Coin> = {...opt, item};
      return super.create(optB).pipe(
        map(value => ({...value, data: [value.data]})) // trasformo la singola risposta da {data:T} in {data:T[]}
      );
    });
    return of(...result).pipe(
      mergeMap(value => value)
    );
  }

}

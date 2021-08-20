import {Injectable} from '@angular/core';
import {Coin} from '@models/vo/coin';
import {environment} from '../../../environments/environment';
import {IBaseCrudService, ICriteria, OptRequest, Response} from 'ngrx-entity-crud';
import {Observable} from 'rxjs';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs/operators';
import {MutationOptions, QueryOptions} from '@apollo/client/core';

@Injectable({
  providedIn: 'root'
})
export class CoinService implements IBaseCrudService<Coin> {
  public service = environment.webServiceUri + 'coin';

  constructor(private apollo: Apollo) {
  }

  search(value?: ICriteria): Observable<Response<Coin[]>> {
    console.log('CoinService.search()');
    return this.query(value);
  }

  select(opt: OptRequest): Observable<Response<Coin>> {
    return this.mutate(opt)
  }

  create(opt: OptRequest): Observable<Response<Coin>> {
    return this.mutate(opt)
  }

  createMany(opt: OptRequest): Observable<Response<Coin[]>> {
    return this.mutate(opt)
  }

  update(opt: OptRequest): Observable<Response<Coin>> {
    return this.mutate(opt)
  }

  updateMany(opt: OptRequest): Observable<Response<Coin[]>> {
    return this.mutate(opt);
  }

  delete(opt: OptRequest): Observable<Response<string>> {
    return this.mutate(opt)
  }

  deleteMany(opt: OptRequest): Observable<Response<string[]>> {
    return this.mutate(opt)
  }

  mutateMany(opt: OptRequest<MutationOptions>): Observable<Response<string[]>> {
    return this.apollo.mutate(opt.mutationParams).pipe(
      map(response => {
        debugger
        return ({
          message: '',
          hasError: false,
          data: (response.data as any).allCoins
        })
      })
    )
  }

  mutate(opt: OptRequest<MutationOptions>): Observable<Response<string[]>> {
    return this.apollo.mutate(opt.mutationParams).pipe(
      map(response => {
        debugger
        return ({
          message: '',
          hasError: false,
          data: (response.data as any).allCoins
        })
      })
    )
  }

  query(value?: ICriteria<QueryOptions>): Observable<Response<Coin[]>> {
    console.log('CoinService.search()');
    return this.apollo
      .query(value.queryParams).pipe(
        map(response => {
          debugger
          return ({
            message: '',
            hasError: false,
            data: (response.data as any).allCoins
          })
        })
      )
  }
}

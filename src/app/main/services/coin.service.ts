import {Injectable} from '@angular/core';
import {Coin} from '@models/vo/coin';
import {environment} from '../../../environments/environment';
import {BaseCrudService, ICriteria, OptManyRequest, OptRequest, Response} from 'ngrx-entity-crud';
import {Observable} from 'rxjs';
import {Apollo} from 'apollo-angular';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AllCoinsGQL} from '../../../generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class CoinService extends BaseCrudService<Coin> {
  public service = environment.webServiceUri + 'coin';

  constructor(public http: HttpClient, private apollo: Apollo, private allCoinsGQL: AllCoinsGQL) {
    super(http);
  }

  search(value?: ICriteria): Observable<Response<Coin[]>> {
    console.log('CoinService.search()');
    debugger
    return this.allCoinsGQL.fetch().pipe(
      map(response => {
        debugger
        return ({
          message: '',
          hasError: false,
          data: (response.data as any).allCoins
        })
      })
    )
    // return this.apollo
    //   .query(value.queryParams).pipe(
    //     map(response => {
    //       return ({
    //         message: '',
    //         hasError: false,
    //         data: (response.data as any).allCoins
    //       })
    //     })
    //   )
  }

  create(opt: OptRequest<Coin>): Observable<Response<Coin>> {
    return super.create(opt);
  }


  createMany(opt: OptManyRequest<Coin>): Observable<Response<Coin[]>> {
    return super.createMany(opt);
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

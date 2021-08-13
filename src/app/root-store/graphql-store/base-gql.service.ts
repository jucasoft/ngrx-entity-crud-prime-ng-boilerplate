import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {EmptyObject, ExtraSubscriptionOptions, WatchQueryOptions} from 'apollo-angular/types';
import {ApolloQueryResult, FetchResult, MutationOptions, QueryOptions, SubscriptionOptions} from '@apollo/client/core';
import {Observable} from 'rxjs';
import {QueryRef} from 'apollo-angular/query-ref';

export interface IBaseGQLService {
  watchQuery<TData, TVariables = EmptyObject>(options: WatchQueryOptions<TVariables, TData>): QueryRef<TData, TVariables>;

  query<T, V = EmptyObject>(options: QueryOptions<V, T>): Observable<ApolloQueryResult<T>>;

  mutate<T, V = EmptyObject>(options: MutationOptions<T, V>): Observable<FetchResult<T>>;

  subscribe<T, V = EmptyObject>(options: SubscriptionOptions<V, T>, extra?: ExtraSubscriptionOptions): Observable<FetchResult<T>>;
}

@Injectable({
  providedIn: 'root'
})
export class BaseGQLService implements IBaseGQLService {

  constructor(private apollo: Apollo) {
  }

  watchQuery<TData, TVariables = EmptyObject>(options: WatchQueryOptions<TVariables, TData>): QueryRef<TData, TVariables> {
    return this.apollo.watchQuery(options);
  };

  query<T, V = EmptyObject>(options: QueryOptions<V, T>): Observable<ApolloQueryResult<T>> {
    return this.apollo.query(options);
  };

  mutate<T, V = EmptyObject>(options: MutationOptions<T, V>): Observable<FetchResult<T>> {
    return this.apollo.mutate(options);
  };

  subscribe<T, V = EmptyObject>(options: SubscriptionOptions<V, T>, extra?: ExtraSubscriptionOptions): Observable<FetchResult<T>> {
    return this.apollo.subscribe(options);
  };

}

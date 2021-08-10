import {Injectable} from '@angular/core';
import {Launch} from '@models/vo/launch';
import {environment} from '../../../environments/environment';
import {BaseCrudService, ICriteria, Response} from 'ngrx-entity-crud';
import {Apollo, gql} from 'apollo-angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LaunchService extends BaseCrudService<Launch> {

  constructor(public http: HttpClient, private apollo: Apollo) {
    super(http);
    this.service = environment.webServiceUri + 'launch';
  }

  search(value?: ICriteria): Observable<Response<Launch[]>> {
    debugger
    return this.apollo
      .query<Launch[]>({
        query: gql`{ launchesPast(limit: 10) { id details launch_date_local ships { name home_port image } } }`,
      }).pipe(
        map((result) => ({data: (result.data as any).launchesPast, hasError: false, message: ''}))
      )
  }
}

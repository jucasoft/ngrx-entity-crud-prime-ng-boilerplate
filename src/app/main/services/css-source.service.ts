import {Injectable} from '@angular/core';
import {CssSource} from '@models/vo/css-source';
import {environment} from '../../../environments/environment';
import {BaseSingularCrudService, ICriteria, Response} from 'ngrx-entity-crud';
import {Observable} from 'rxjs';
import {CssItem} from '@models/vo/css-item';
import {map, startWith} from 'rxjs/operators';
import {toJSON} from 'css-convert-json';

@Injectable({
	providedIn: 'root'
})
export class CssSourceService extends BaseSingularCrudService<CssSource> {
	public service = environment.webServiceUri + 'css-source';
  select(value?: ICriteria): Observable<Response<CssItem>> {
    return this.http.get('/assets/tailwind-light/theme.css', {responseType: 'text'}).pipe(
      startWith(''),
      map(value => ({message: '', hasError: false, data: toJSON(value)}))
    )
  }
}

import {Injectable} from '@angular/core';
import {CssItem} from '@models/vo/css-item';
import {environment} from '../../../environments/environment';
import {BaseCrudService, ICriteria, Response} from 'ngrx-entity-crud';
import {map, startWith} from 'rxjs/operators';
import {toJSON} from 'css-convert-json';
import {Observable, of} from 'rxjs';
import colorSort from 'color-sorter';
import {OptRequest} from 'ngrx-entity-crud';

@Injectable({
  providedIn: 'root'
})
export class CssItemService extends BaseCrudService<CssItem> {
  public service = environment.webServiceUri + 'css-item';


  updateMany(opt: OptRequest<CssItem[]>): Observable<Response<CssItem[]>> {
    return of({
      message: '',
      hasError: false,
      data: opt.mutationParams
    });
  }

  search(value?: ICriteria): Observable<Response<CssItem[]>> {
    return this.http.get('/assets/tailwind-light/theme.css', {responseType: 'text'}).pipe(
      startWith(''),
      // tap(test => console.log('test', test)),
      map(value => {
        const source = toJSON(value);
        const keys = Object.keys(source.children);
        const tree = keys.reduce((prev: any, curr: any) => {

          // console.log('prev', prev);
          if (curr === ':root' || curr === '@font-face') {
            return prev
          }
          const attributes = source.children[curr].attributes
          // console.log('attributes', attributes);
          Object.keys(attributes).forEach((key: string) => {
            // console.log('key', key);
            // console.log('Array.isArray(attributes[key])', Array.isArray(attributes[key]));
            if (Array.isArray(attributes[key])) {
              return;
            }
            const colors: string[] = attributes[key].split('#');
            // console.log('colors', colors);
            if (colors.length > 1) {
              if (!prev[key]) {
                prev[key] = {};
              }
              colors.shift();
              colors.map(value1 => value1.slice(0, 6)).forEach(color => {
                if (!prev[key]['#' + color]) {
                  prev[key]['#' + color] = [];
                }
                prev[key]['#' + color] = [...prev[key]['#' + color], curr];
              });
            }
          })
          return prev;
        }, {})
        const data: CssItem[] = [];
        const keysA = Object.keys(tree);
        keysA.forEach((property: string) => {
          const treeB = tree[property];
          const keysB: any[] = Object.keys(treeB);
          // console.log('keysB', keysB);
          keysB.forEach((color: string) => {
            treeB[color].forEach((styleRule: string) => {
              data.push({property, color, styleRule, varName: ''});
            });
          });
        });
        data.sort(sortFn('color'))
        // const colors = getDistinct('color', list).sort(sortFn('value'));
        // const properties = getDistinct('property', list)
        return {message: '', hasError: false, data}
      })
    )
  }
}

const sortFn = (key) => (data1, data2) => colorSort.sortFn(data1[key], data2[key])

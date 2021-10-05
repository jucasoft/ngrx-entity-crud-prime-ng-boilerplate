import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState} from '@root-store/index';
import {HttpClient} from '@angular/common/http';
import {map, startWith} from 'rxjs/operators';
import {toJSON} from 'css-convert-json';
import {Observable} from 'rxjs';
import {SortEvent, TreeNode} from 'primeng/api';
import colorSort from 'color-sorter';

@Component({
  selector: 'app-editor-main',
  templateUrl: 'editor-main.component.html',
  styles: []
})
export class EditorMainComponent implements OnInit {

  source$: Observable<any>
  exclude = '';

  constructor(private readonly store$: Store<RootStoreState.State>,
              private readonly http: HttpClient) {
  }

  ngOnInit(): void {
    this.source$ = this.http.get('/assets/tailwind-light/theme.css', {responseType: 'text'}).pipe(
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
        const list: any[] = [];
        const keysA = Object.keys(tree);
        const treeNodes: TreeNode[] = []
        // console.log('keysA', keysA);
        keysA.forEach((property: string) => {
          const treeB = tree[property];
          const keysB: any[] = Object.keys(treeB);
          // console.log('keysB', keysB);
          keysB.forEach((color: string) => {
            treeB[color].forEach((styleRule: string) => {
              list.push({property, color, styleRule});
            });
          });
        });
        const colors = getDistinct('color', list).sort(sortFn('value'));
        const properties = getDistinct('property', list)
        return {list, colors, properties}
      })
    )
  }

  myUploader($event: any) {
    console.log('EditorMainComponent.myUploader()');
    // const json = toJSON(cssString);
    // const css = toCSS(jsonObject);
  }


  customSort(event: SortEvent) {
    event.data.sort(sortFn('color'));
  }


  test($event: any) {
    debugger
    console.log('$event', $event);
  }
}

const sortFn = (key) => (data1, data2) => colorSort.sortFn(data1[key], data2[key])

function getDistinct(attr: string, source: any[]) {
  const result = source.reduce((prev, curr) => {
    const key = curr[attr];
    prev[key] = typeof prev[key] === 'number' ? prev[key] + 1 : 1;
    return prev;
  }, {})
  return Object.keys(result).map(value => ({value, qt: result[value]}));
}

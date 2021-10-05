import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState} from '@root-store/index';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SortEvent} from 'primeng/api';
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

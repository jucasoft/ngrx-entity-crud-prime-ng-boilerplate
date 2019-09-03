import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {RootStoreState} from '../../../root-store';
import {SlideMenuStoreSelectors} from '@root-store/slide-menu-store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <div style="color: #898989; font-size: 1em;"><em class="fas fa-home"></em> {{item$ | async}}</div>
  `,
  styles: []
})
export class BreadcrumbComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  item$: Observable<string>;

  ngOnInit() {

    this.item$ = this.store$.pipe(select(
      SlideMenuStoreSelectors.selectBreadcrumbRenderized
    ));
  }

}

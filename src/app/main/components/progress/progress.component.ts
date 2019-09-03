import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-progress',
  template: `
    <p-progressBar *ngIf="isLoading$ | async" mode="indeterminate"
                   [style]="{'height': '3px', 'border-radius': '0px'}"></p-progressBar>
  `,
  styles: []
})
export class ProgressComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  isLoading$: Observable<boolean>;

  ngOnInit() {
    this.isLoading$ = this.store$.select(RootStoreSelectors.selectIsLoading);
  }

}

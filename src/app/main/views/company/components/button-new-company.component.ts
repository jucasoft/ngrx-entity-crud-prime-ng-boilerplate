import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Company} from '@models/vo/company';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-button-new-company',
  template: `
    <button type="button" pButton icon="fa fa-fw fa-plus"
            label="New Company" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewCompanyComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: Company = new Company();

    const data: PopUpData<Company> = {
      item,
      props: {title: 'New Company', route: 'company'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['company', {outlets: {popUp: ['edit']}}],
      data
    }));
  }

}

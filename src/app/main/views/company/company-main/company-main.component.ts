import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CompanyStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Company} from '@models/vo/company';

@Component({
  selector: 'app-company-main',
  templateUrl: 'company-main.component.html',
  styles: []
})
export class CompanyMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<Company> = CompanyStoreActions.actions;

  ngOnInit() {
  }
}

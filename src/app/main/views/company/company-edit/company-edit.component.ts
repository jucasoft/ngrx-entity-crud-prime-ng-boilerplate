import {Component, OnInit} from '@angular/core';
import {PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Company} from '@models/vo/company';
import {Observable} from 'rxjs';
import {User} from '@models/vo/user';
import {select} from '@ngrx/store';
import {UserStoreActions, UserStoreSelectors} from '@root-store/user-store';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styles: [``]
})
export class CompanyEditComponent extends PopUpBaseComponent<Company> implements OnInit {

  users$: Observable<User[]>;
  total$: Observable<number>;

  ngOnInit(): void {
    super.ngOnInit();
  }

  setItemPerform(value: Company): void {
    const companyId = value.id;
    this.users$ = this.store$.pipe(
      select(UserStoreSelectors.selectFromCompanyId, {companyId})
    );

    this.total$ = this.store$.pipe(
      select(UserStoreSelectors.selectAll),
      map(value1 => value1.length)
    );

    this.store$.dispatch(UserStoreActions.SearchRequest({queryParams: {companyId}}));
  }

}

import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Company} from '@models/vo/company';
import {FormGroup} from '@angular/forms';
import {CompanyStoreActions} from '@root-store/company-store';


@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styles: [``]
})
export class CompanyEditComponent extends PopUpBaseComponent<Company> {

  form: FormGroup;
  keys: string[];

  setItemPerform(value: Company): void {
    const group = this.fb.group({});
    this.keys = Object.keys(value);
    this.keys.forEach(key => group.addControl(key, this.fb.control({value: value[key], disabled: key === 'id'})));
    this.form = group;
  }

  acceptPerform(item: Company): void {
    if (item.id) {
      this.store$.dispatch(CompanyStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(CompanyStoreActions.CreateRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    }
  }

  // cancel(): void {
  //   this.store$.dispatch(closePopUpAction(this.route));
  // }
}

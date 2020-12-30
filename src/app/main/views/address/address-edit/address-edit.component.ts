import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Address} from '@models/vo/address';
import {FormGroup} from '@angular/forms';
import {AddressStoreActions} from '@root-store/address-store';


@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styles: [``]
})
export class AddressEditComponent extends PopUpBaseComponent<Address> {

  form: FormGroup;
  keys: string[];

  setItemPerform(value: Address): void {
    const group = this.fb.group({});
    this.keys = Object.keys(value);
    this.keys.forEach(key => group.addControl(key, this.fb.control({value: value[key], disabled: key === 'id'})));
    this.form = group;
  }

  acceptPerform(item: Address): void {
    if (item.id) {
      this.store$.dispatch(AddressStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(AddressStoreActions.CreateRequest({
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

import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {User} from '@models/vo/user';
import {FormGroup} from '@angular/forms';
import {UserStoreActions} from '@root-store/user-store';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styles: [``]
})
export class UserEditComponent extends PopUpBaseComponent<User> {

  form: FormGroup;
  keys: string[];

  setItemPerform(value: User): void {
    const group = this.fb.group({});
    this.keys = Object.keys(value);
    this.keys.forEach(key => group.addControl(key, this.fb.control({value: value[key], disabled: key === 'id'})));
    this.form = group;
  }

  acceptPerform(item: User): void {
    if (item.id) {
      this.store$.dispatch(UserStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(UserStoreActions.CreateRequest({
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

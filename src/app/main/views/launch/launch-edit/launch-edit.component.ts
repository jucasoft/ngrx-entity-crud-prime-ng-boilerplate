import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Launch} from '@models/vo/launch';
import {FormGroup} from '@angular/forms';
import {LaunchStoreActions} from '@root-store/launch-store';


@Component({
  selector: 'app-launch-edit',
  templateUrl: './launch-edit.component.html',
  styles: [``]
})
export class LaunchEditComponent extends PopUpBaseComponent<Launch> {

  form: FormGroup;
  keys: string[];

  setItemPerform(value: Launch): void {
    const group = this.fb.group({});
    this.keys = Object.keys(value);
    this.keys.forEach(key => group.addControl(key, this.fb.control({value: value[key], disabled: key === 'id'})));
    this.form = group;
  }

  acceptPerform(item: Launch): void {
    if (item.id) {
      this.store$.dispatch(LaunchStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(LaunchStoreActions.CreateRequest({
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

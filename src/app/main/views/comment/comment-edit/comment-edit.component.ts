import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Comment} from '@models/vo/comment';
import {FormGroup} from '@angular/forms';
import {CommentStoreActions} from '@root-store/comment-store';


@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styles: [``]
})
export class CommentEditComponent extends PopUpBaseComponent<Comment> {

  form: FormGroup;
  keys: string[];

  setItemPerform(value: Comment): void {
    const group = this.fb.group({});
    this.keys = Object.keys(value);
    this.keys.forEach(key => group.addControl(key, this.fb.control({value: value[key], disabled: key === 'id'})));
    this.form = group;
  }

  acceptPerform(item: Comment): void {
    if (item.id) {
      this.store$.dispatch(CommentStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(CommentStoreActions.CreateRequest({
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

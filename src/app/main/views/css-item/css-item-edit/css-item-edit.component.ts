import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-css-item-edit',
  templateUrl: './css-item-edit.component.html',
  styles: [``]
})
export class CssItemEditComponent {

  form: FormGroup;
  varName: FormControl;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
  }

  ngOnInit() {
    this.varName = new FormControl();
    this.form = new FormGroup({
      varName: this.varName
    })
    //id: this.config.id
    // this.carService.getCarsSmall(id).then(cars => this.cars = cars);
  }


  cancel() {
    this.ref.close();
  }

  submit(rawValue: any) {
    this.ref.close(rawValue.varName);
  }
}

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
  suffix: FormControl;
  varList = [
    '--text-color',
    '--background-color',
    '--border-color',
    '--outline-color',
    '--box-shadow',
  ].reduce((prev: string[], curr: string) => {
    return [...prev, ...'abcd'.split('').map(value => `${curr}-${value}`)]
  }, []).map(value => ({name: value, code: value}))

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
  }

  ngOnInit() {
    this.varName = new FormControl(null);
    this.suffix = new FormControl(null);

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

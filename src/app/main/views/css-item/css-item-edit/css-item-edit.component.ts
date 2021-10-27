import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {CssSourceStoreSelectors} from '@root-store/css-source-store/index';

@Component({
  selector: 'app-css-item-edit',
  templateUrl: './css-item-edit.component.html',
  styles: [``]
})
export class CssItemEditComponent {

  form: FormGroup;
  varName: FormControl;
  suffix: FormControl;
  // creo in automatico una serie di valori selezionabilli
  varList$: Observable<any[]>;
  // varList = [
  //   '--text-color',
  //   '--background-color',
  //   '--border-color',
  //   '--outline-color',
  //   '--box-shadow',
  // ].reduce((prev: string[], curr: string) => {
  //   return [...prev, ...'abcd'.split('').map(value => `${curr}-${value}`)]
  // }, []).map(value => ({name: value, code: value}))

  constructor(public store$: Store, public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
  }

  ngOnInit() {
    this.varName = new FormControl(null);
    this.suffix = new FormControl(null);

    this.form = new FormGroup({
      varName: this.varName
    })
    //id: this.config.id
    // this.carService.getCarsSmall(id).then(cars => this.cars = cars);
    this.varList$ = this.store$.pipe(
      select(CssSourceStoreSelectors.selectRootVarsArray)
    )
  }


  cancel() {
    this.ref.close();
  }

  submit(rawValue: any) {
    this.ref.close(rawValue.varName);
  }
}

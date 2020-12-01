import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-error-msg',
  template: `
    <div *ngIf="fc.invalid && fc.touched"><small class="p-invalid">{{fc.errors && fc.errors.error ? fc.errors.getMessage() : ''}}</small></div>
  `,
  styles: []
})
export class FormErrorMsgComponent implements OnInit {

  @Input()
  fc: FormControl;

  constructor() {
  }

  ngOnInit(): void {
  }

}


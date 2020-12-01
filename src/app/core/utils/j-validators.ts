import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class Opt {

  context?: any;
  error?: boolean;
  level: 'error' | 'warn' = 'error';
  message = '';
  type?: string;

  getMessage ? = () => {
    if (!this.context) {
      return this.message;
    }

    let result: string = this.message;
    const keys: string[] = Object.getOwnPropertyNames(this.context);

    for (let key of keys) {
      const value: any = this.context[key];
      key = `{${key}}`;
      if (result.indexOf(key) === -1) {
        let messageA = `Attenzione!, nel messaggio del validatore ${this.type} : "${this.message}" non è presente ${key}.`;
        if (keys.length !== 1) {
          messageA += `\nI valori possibili per questo validatore sono: {${keys.toString().replace(',', '}, {')}}`;
        }
      } else {
        result = result.replace(key, value);
      }
    }
    return result;
  }
}

function isEmptyInputValue(value: any): boolean {
  // we don't check for string here so it also works with arrays
  return value == null || value.length === 0;
}

export class JValidators {


  static required(optionsA: Opt = new Opt()): ValidatorFn {
    const options = new Opt();
    options.error = optionsA.error || true;
    options.level = optionsA.level || 'error';
    options.type = 'required';
    options.message = optionsA.message || 'This field is required.';
    return (control: AbstractControl): ValidationErrors | null => {
      return isEmptyInputValue(control.value) ? options : null;
    };
  }

  static minLength(minLength: number, optionsA: Opt = new Opt()): ValidatorFn {
    const options = new Opt();
    options.error = optionsA.error || true;
    options.level = optionsA.level || 'error';
    options.type = 'minlength';
    options.message = optionsA.message || 'Minimum length not correct {actualLength}/{requiredLength}';
    return (control: AbstractControl): ValidationErrors | null => {
      if (isEmptyInputValue(control.value)) {
        return null;  // don't validate empty values to allow optional controls
      }
      const length: number = control.value ? control.value.length : 0;
      options.context = {requiredLength: minLength, actualLength: length};
      return length < minLength ?
        options :
        null;
    };
  }

  static maxLength(maxLength: number, optionsA: Opt = new Opt()): ValidatorFn {
    const options = new Opt();
    options.error = optionsA.error || true;
    options.level = optionsA.level || 'error';
    options.type = 'maxlength';
    options.message = optionsA.message || 'Maximum length not correct {actualLength}/{requiredLength}';
    return (control: AbstractControl): ValidationErrors | null => {
      const length: number = control.value ? control.value.length : 0;
      options.context = {requiredLength: maxLength, actualLength: length};
      // options = {...optTemp, ...options};
      return length > maxLength ?
        options :
        null;
    };
  }

  static min(min: number, optionsA: Opt = new Opt()): ValidatorFn {
    const options = new Opt();
    options.error = optionsA.error || true;
    options.level = optionsA.level || 'error';
    options.type = 'min';
    options.message = optionsA.message || 'Minimum value not correct {actual}/{min}';
    return (control: AbstractControl): ValidationErrors | null => {
      if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
        return null;  // don't validate empty values to allow optional controls
      }
      const value = parseFloat(control.value);
      // Controls with NaN values after parsing should be treated as not having a
      // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
      options.context = {min, actual: control.value};
      return !isNaN(value) && value < min ? options : null;
    };
  }

  static max(max: number, optionsA: Opt = new Opt()): ValidatorFn {
    const options = new Opt();
    options.error = optionsA.error || true;
    options.level = optionsA.level || 'error';
    options.type = 'max';
    options.message = optionsA.message || 'Maximum value not correct {actual}/{max}';
    return (control: AbstractControl): ValidationErrors | null => {
      if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
        return null;  // don't validate empty values to allow optional controls
      }
      const value = parseFloat(control.value);
      // Controls with NaN values after parsing should be treated as not having a
      // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
      options.context = {max, actual: control.value};
      return !isNaN(value) && value > max ? options : null;
    };
  }

}

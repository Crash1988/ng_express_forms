import { AbstractControl } from '@angular/forms';

export function ValidateArrayEmpty(control: AbstractControl) {
  console.log('length  ', control.value );
  if (control.value && control.value.length > 0) {
    return null;
  }
  return { emptyArray: true };
}

export function StartWithLetters(control: AbstractControl) {
  console.log('value  ', control.value );
  if (control.value.toUpperCase().match(/^[A-Z]/i)) {
    return null;
  }
  return { StartWithLetters: true };
}

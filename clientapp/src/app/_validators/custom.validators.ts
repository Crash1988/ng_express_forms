import { AbstractControl, FormControl } from '@angular/forms';
import {ApiCallsService} from '../_services/api-calls.service';
import { Observable, timer, of } from 'rxjs';
import { map, switchMap  } from 'rxjs/operators';


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


// async Validator
// is wrapped in a class so we can pass the service needed to make the back end call
export class ValidateZipCodeNState {
  static createValidator(apiCallsService: ApiCallsService) {
    return (control: AbstractControl): Observable<any> | null  => {
      if ( !control.value.zipCode || !control.value.state ) {
        console.log('entered', control.value.zipCode , control.value.state );
        return new Observable(null);
      }
      return apiCallsService.checkzipcodebystate(control.value.zipCode, control.value.state).pipe(
          map(res => {
            if (res && !res.isValid) {
              // return error
              return { invalidZipState: true};
            }
            return null;
          })
        );
    };
  }
}

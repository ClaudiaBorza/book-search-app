import { AbstractControl, ValidationErrors } from '@angular/forms';

export class WhiteSpaceValidator {
  static noWhiteSpace(control: AbstractControl): ValidationErrors | null {
    let isValid = true;
    if (control.value && (control.value as string).indexOf(' ') >= 0) {
      isValid = false;
      control.value.toString().split('').forEach((val: string) => {
        if (val !== ' ') {
          isValid = true;
        }
      });
    }
    return isValid ? null : {noWhiteSpace: true};
  }
}

import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { PhoneNumerLengthValidationFactory } from '../validators/phone-numer-length-validation-factory';

@Directive({
  selector: '[appPhoneNumberLength]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PhoneNumberLengthDirective,
    multi: true
  }]
})
export class PhoneNumberLengthDirective implements Validator {
  validatePhoneNumber: ValidatorFn;
  constructor() {
    this.validatePhoneNumber = PhoneNumerLengthValidationFactory.phoneNumberLength();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validatePhoneNumber(control);
  }
}

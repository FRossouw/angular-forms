import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { PhoneNumberValidationFactory } from '../validators/phone-number-validation-factory';

@Directive({
  selector: '[appLocalPhoneNumber]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: LocalPhoneNumberDirective,
    multi: true
  }]
})
export class LocalPhoneNumberDirective implements Validator {
  validatePhoneNumber: ValidatorFn;
  constructor() {
    this.validatePhoneNumber = PhoneNumberValidationFactory.localPhoneNumber();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validatePhoneNumber(control);
  }

}

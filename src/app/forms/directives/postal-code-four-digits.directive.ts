import { Directive } from '@angular/core';
import { NG_VALIDATORS, ValidatorFn, Validator, ValidationErrors, AbstractControl } from '@angular/forms';
import { PostalCodeValidationFactory } from '../validators/postal-code-validation-factory';
import { stringify } from 'querystring';

@Directive({
  selector: '[appPostalCodeFourDigits]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PostalCodeFourDigitsDirective,
    multi: true
  }]
})
export class PostalCodeFourDigitsDirective implements Validator {
  validatePostalCode: ValidatorFn;
  constructor() {
    this.validatePostalCode = PostalCodeValidationFactory.postalCodeFourDigits();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validatePostalCode(control);
  }

}

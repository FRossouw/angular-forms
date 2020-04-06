import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { StreetValidationFactory } from '../validators/street-validation-factory';

@Directive({
  selector: '[appStreetValidation]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: StreetValidationDirective,
    multi: true
  }]
})
export class StreetValidationDirective implements Validator {
  validateStreet: ValidatorFn;
  constructor() {
    this.validateStreet = StreetValidationFactory.validStreet();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validateStreet(control);
  }

}

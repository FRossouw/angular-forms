import { ValidatorFn, AbstractControl } from '@angular/forms';

export class PostalCodeValidationFactory {
    static postalCodeFourDigits(): ValidatorFn {
        return (control: AbstractControl) => {
            if (!control.value) {
                return null;
            }

            const isValid = /^[0-9]{4}$/.test(control.value);
            return isValid ? null : { postalCodeFourDigits: true };
        }
    };
}

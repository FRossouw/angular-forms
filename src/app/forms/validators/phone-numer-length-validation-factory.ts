import { ValidatorFn, AbstractControl } from '@angular/forms';

export class PhoneNumerLengthValidationFactory {
    static phoneNumberLength(): ValidatorFn {
        return (control: AbstractControl) => {
            if (!control.value) {
                return null;
            }
            const isValid = /^\+27[0-9]{9}$/.test(control.value);
            return isValid ? null : { phoneNumberLength: true };
        };
    }
}

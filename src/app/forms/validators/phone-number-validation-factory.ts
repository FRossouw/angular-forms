import { ValidatorFn, AbstractControl } from '@angular/forms';

export class PhoneNumberValidationFactory {
    static localPhoneNumber(): ValidatorFn {
        return (control: AbstractControl) => {
            if (!control.value) {
                return null;
            }
            const isValid = /^\+27/.test(control.value);
            return isValid ? null : { localPhoneNumber: true }
        }
    }
}

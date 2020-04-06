import { ValidatorFn, AbstractControl } from '@angular/forms';

export class StreetValidationFactory {
    static validStreet(): ValidatorFn {
        return (control: AbstractControl) => {
            if (!control.value) {
                return null;
            }

            const isValid = /street|Street|st|St|avenue|Avenue|ave|Ave|lane|Lane|laan|Laan|ln|Ln|LN/.test(control.value);
            return isValid ? null : { validStreet: true };
        };
    }
}

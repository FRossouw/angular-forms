import { PhoneNumberValidationFactory } from './phone-number-validation-factory';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

describe('PhoneNumberValidationFactory', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [PhoneNumberValidationFactory]
    });
  });

  it('should create an instance', () => {
    expect(new PhoneNumberValidationFactory()).toBeTruthy();
  });

});

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

import { Title } from '../../models/title.enum';
import { Gender } from '../../models/gender.enum';
import { Contact } from '../../models/contact';

import { PhoneNumberValidationFactory } from '../../forms/validators/phone-number-validation-factory';
import { PhoneNumerLengthValidationFactory } from 'src/app/forms/validators/phone-numer-length-validation-factory';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  titles: Title[];
  genders: Gender[];
  contact: Contact;

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      title: new FormControl('', { updateOn: 'change' }),
      firstName: new FormControl('', { validators: [Validators.required] }),
      middleName: new FormControl(''),
      lastName: new FormControl('', { validators: [Validators.required] }),
      phoneNumber: new FormControl('', { validators: [PhoneNumberValidationFactory.localPhoneNumber, PhoneNumerLengthValidationFactory.phoneNumberLength, Validators.required] }),
      gender: new FormControl('', { updateOn: 'blur' }),
      email: new FormControl('', { validators: [Validators.email] })
    });

    this.titles = [null, ...Object.values(Title)] as Title[];
    this.genders = [null, ...Object.values(Gender)] as Gender[];
    this.contact = {} as Contact;

  }

  get title(): AbstractControl { return this.form.get('title'); }
  get firstName(): AbstractControl { return this.form.get('firstName'); }
  get middleName(): AbstractControl { return this.form.get('middleName'); }
  get lastName(): AbstractControl { return this.form.get('lastName'); }
  get gender(): AbstractControl { return this.form.get('gender'); }
  get phoneNumber(): AbstractControl { return this.form.get('phoneNumber'); }
  get email(): AbstractControl { return this.form.get('email'); }

  ngOnInit(): void {
    this.title.valueChanges.subscribe(x => this.contact.title = x);
    this.firstName.valueChanges.subscribe(x => this.contact.firstName = x);
    this.middleName.valueChanges.subscribe(x => this.contact.middleName = x);
    this.lastName.valueChanges.subscribe(x => this.contact.lastName = x);
    this.gender.valueChanges.subscribe(x => this.contact.gender = x);
    this.phoneNumber.valueChanges.subscribe(x => this.contact.phoneNumber = x);
    this.email.valueChanges.subscribe(x => this.contact.email = x);
  }

  displayContact(): void {
    alert(JSON.stringify(this.contact));
  }

}

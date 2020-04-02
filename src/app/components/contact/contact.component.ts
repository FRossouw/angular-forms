import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

import { Title } from '../../models/title.enum';
import { Gender } from '../../models/gender.enum';
import { Contact } from '../../models/contact';

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
      title: new FormControl(''),
      firstName: new FormControl(''),
      middleName: new FormControl(''),
      lastName: new FormControl(''),
      phoneNumber: new FormControl(''),
      gender: new FormControl(''),
      email: new FormControl('')
    });

    this.titles = [null, ...Object.values(Title)] as Title[];
    this.genders = [null, ...Object.values(Gender)] as Gender[];

  }

  get title(): AbstractControl { return this.form.get('title'); }
  get firstName(): AbstractControl { return this.form.get('firstName'); }
  get middleName(): AbstractControl { return this.form.get('middleName'); }
  get lastName(): AbstractControl { return this.form.get('lastName'); }
  get gender(): AbstractControl { return this.form.get('gender'); }
  get phoneNumber(): AbstractControl { return this.form.get('phoneNumber'); }
  get email(): AbstractControl { return this.form.get('email'); }

  ngOnInit(): void {
  }

}

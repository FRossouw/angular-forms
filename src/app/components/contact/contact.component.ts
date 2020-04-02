import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Title } from '../../models/title.enum';
import { Gender } from '../../models/gender.enum';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  titles: Title[];
  genders: Gender[];

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

  ngOnInit(): void {
  }

}

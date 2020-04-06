import { Title } from '@angular/platform-browser';
import { Gender } from './gender.enum';

export class Contact {
    title: Title;
    firstName: string;
    middleName: string;
    lastName: string;
    phoneNumber: string;
    gender: Gender;
    email: string;
}

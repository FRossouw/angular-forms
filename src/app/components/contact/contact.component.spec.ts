import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  let title, firstName, middleName, lastName, gender, phone, email;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    title = component.form.controls.title;
    firstName = component.form.controls.firstName;
    middleName = component.form.controls.middleName;
    lastName = component.form.controls.lastName;
    gender = component.form.controls.gender;
    phone = component.form.controls.phoneNumber;
    email = component.form.controls.email;

  });

  it('should create the contact component', () => {
    expect(component).toBeTruthy();
  });

  it('should check title text input validity', () => {
    title.setValue('Mr.');
    expect(title.valid).toBeTruthy();
  });

  it('should check first name text input validity', () => {
    firstName.setValue('Nelson');
    expect(firstName.valid).toBeTruthy();
  });

  it('should check middle name text input validity', () => {
    middleName.setValue('Monty');
    expect(middleName.valid).toBeTruthy();
  });

  it('should check last name text input validity', () => {
    lastName.setValue('Richards');
    expect(lastName.valid).toBeTruthy();
  });

  it('should check gender text input validity', () => {
    gender.setValue('Male');
    expect(gender.valid).toBeTruthy();
  });

  it('should check phone number text input validity', () => {
    phone.setValue('+27767787788');
    expect(phone.valid).toBeTruthy();
  });

  it('should check email text input validity', () => {
    email.setValue('nelson@hotmail.co.za');
    expect(email.valid).toBeTruthy();
  });

  it('should call the displayContact method', () => {
    spyOn(component, 'displayContact');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.displayContact).toHaveBeenCalled();
    }).catch(() => { });

  });

});

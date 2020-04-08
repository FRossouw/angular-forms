import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check local phone number empty validity', () => {
    const phone = component.form.controls.phoneNumber;
    expect(phone.valid).toBeFalsy();
  });

  it('should check local phone number text validity', () => {
    const phone = component.form.controls.phoneNumber;
    phone.setValue('+27767787788');
    expect(phone.valid).toBeTruthy();
  });

});

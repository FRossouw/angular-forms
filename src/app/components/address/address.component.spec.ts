import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressComponent } from './address.component';
import { FormsModule } from '@angular/forms';
import { Address } from 'src/app/models/address';
import { Province } from 'src/app/models/province.enum';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;
  let address: Address;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AddressComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    address = {
      line1: '535 Foxglove Avenue',
      line2: 'Doornpoort',
      city: 'Pretoria',
      province: 'Gauteng' as Province,
      zipCode: '0017',
    } as Address;

    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});

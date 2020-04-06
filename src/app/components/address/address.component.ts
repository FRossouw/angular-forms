import { Component } from '@angular/core';
import { Address } from 'src/app/models/address';
import { Province } from 'src/app/models/province.enum';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {

  address: Address;
  provinces: Province[];

  constructor() {
    this.address = new Address();
    this.provinces = Object.values(Province) as Province[];
  }

  displayAddress() {
    alert(JSON.stringify(this.address));
  }

}

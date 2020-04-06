import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { LocalPhoneNumberDirective } from './forms/directives/local-phone-number.directive';
import { AddressComponent } from './components/address/address.component';
import { PostalCodeFourDigitsDirective } from './forms/directives/postal-code-four-digits.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LocalPhoneNumberDirective,
    AddressComponent,
    PostalCodeFourDigitsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

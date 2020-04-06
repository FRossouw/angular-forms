import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { ContactComponent } from './components/contact/contact.component';
import { AddressComponent } from './components/address/address.component';

import { LocalPhoneNumberDirective } from './forms/directives/local-phone-number.directive';
import { PostalCodeFourDigitsDirective } from './forms/directives/postal-code-four-digits.directive';
import { StreetValidationDirective } from './forms/directives/street-validation.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LocalPhoneNumberDirective,
    AddressComponent,
    PostalCodeFourDigitsDirective,
    StreetValidationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

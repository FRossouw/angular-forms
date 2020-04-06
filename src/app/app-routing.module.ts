import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AddressComponent } from './components/address/address.component';


const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'address',
    component: AddressComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contact'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'contact'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

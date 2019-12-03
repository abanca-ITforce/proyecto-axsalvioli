import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { SharedComponent } from '../shared/shared.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: ':countryId', component: SharedComponent
  }
];

@NgModule({
  declarations: [HomeComponent, CountryComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule.forChild(routes)
  ],
  exports: [HomeComponent, RouterModule]
})
export class HomeModule { }

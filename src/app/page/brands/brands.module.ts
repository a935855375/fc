import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from '../../material.module';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {FormsModule} from '@angular/forms';
import {BrandsRoutingModule} from './brands.routing.module';
import {BrandsComponent} from './brands.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    BrandsRoutingModule,
    MaterialModule,
    AngularMultiSelectModule
  ],
  declarations: [
    BrandsComponent,
  ]
})
export class BrandsMoudule {
}

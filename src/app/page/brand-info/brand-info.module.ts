import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from '../../material.module';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {FormsModule} from '@angular/forms';
import {BrandInfoComponent} from './brand-info.component';
import {BrandInfoRoutingMudule} from './brand-info.routing.mudule';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    BrandInfoRoutingMudule,
    MaterialModule,
    AngularMultiSelectModule
  ],
  declarations: [
    BrandInfoComponent,
  ]
})
export class BrandInfoModule {
}

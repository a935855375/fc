import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from '../../material.module';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {FormsModule} from '@angular/forms';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {HighSearchComponent} from './high-search.component';
import {HighSearchRoutingModule} from './high-search.routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    HighSearchRoutingModule,
    MaterialModule,
    AngularMultiSelectModule,
    NgxPageScrollModule
  ],
  declarations: [
    HighSearchComponent,
  ]
})
export class HighSearchModule {
}

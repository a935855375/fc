import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from '../../material.module';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {FormsModule} from '@angular/forms';
import {PromiseSearchRoutingModule, routedComponent} from './promise-search.routing.module';
import {PromiseSearchComponent} from './promise-search.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    PromiseSearchRoutingModule,
    MaterialModule,
    AngularMultiSelectModule,
  ],
  declarations: [
    PromiseSearchComponent,
    ...routedComponent
  ]
})
export class PromiseSearchModule {
}

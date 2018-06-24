import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from '../../material.module';
import {FindRelationRoutingModule} from './find-relation.routing.module';
import {FindRelationComponent} from './find-relation.component';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    FindRelationRoutingModule,
    MaterialModule,
    AngularMultiSelectModule
  ],
  declarations: [
    FindRelationComponent,
  ]
})
export class FindRelationModule {
}

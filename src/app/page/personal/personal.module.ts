import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from '../../material.module';
import {PersonalRoutingModule, routedComponent} from './personal-routing.module';
import {PersonalComponent} from './personal.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    PersonalRoutingModule,
    MaterialModule
  ],
  declarations: [
    PersonalComponent,
    ...routedComponent
  ]
})
export class PersonalModule {
}

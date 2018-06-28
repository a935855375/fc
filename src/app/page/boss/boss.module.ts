import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from '../../material.module';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {FormsModule} from '@angular/forms';
import {BossRoutingModule} from './boss.routing.module';
import {BossComponent} from './boss.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    BossRoutingModule,
    MaterialModule,
    AngularMultiSelectModule,
  ],
  declarations: [
    BossComponent,
  ]
})
export class BossModule {
}

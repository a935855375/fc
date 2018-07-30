import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from '../../material.module';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {FormsModule} from '@angular/forms';
import {BossinfoRoutingModule} from './bossinfo.routing.module';
import {BossinfoComponent} from './bossinfo.component';
import {FrameModule} from '../frame/frame.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    BossinfoRoutingModule,
    MaterialModule,
    AngularMultiSelectModule,
    FrameModule
  ],
  declarations: [
    BossinfoComponent,
  ]
})
export class BossinfoModule {
}

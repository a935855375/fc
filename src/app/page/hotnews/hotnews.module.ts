import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from '../../material.module';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {FormsModule} from '@angular/forms';
import {HotnewsRoutingModule} from './hotnews.routing.module';
import {HotnewsComponent} from './hotnews.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    HotnewsRoutingModule,
    MaterialModule,
    AngularMultiSelectModule,
    NgxPageScrollModule
  ],
  declarations: [
    HotnewsComponent,
  ]
})
export class HotnewsModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from '../../material.module';
import {FindRelationRoutingModule} from './find-relation.routing.module';
import {FindRelationComponent} from './find-relation.component';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {FormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxEchartsModule} from 'ngx-echarts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    FindRelationRoutingModule,
    MaterialModule,
    AngularMultiSelectModule,
    Ng2SearchPipeModule,
    NgxEchartsModule
  ],
  declarations: [
    FindRelationComponent,
  ]
})
export class FindRelationModule {
}

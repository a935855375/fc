import {NgModule} from '@angular/core';
import {CompanyComponent} from './company.component';
import {CompanyRoutingModule, routedComponent} from './company.routing.module';
import {MaterialModule} from '../../material.module';
import {CommonModule} from '@angular/common';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FrameModule} from '../frame/frame.module';
import {TreeModule} from '../../chart/tree/tree.module';
import {PersonModal} from './modals/person.modal';
import {IndentedTreeModule} from '../../chart/indented-tree/indented-tree.module';
import {StructureModal} from './modals/structure.modal';
import {FormsModule} from '@angular/forms';
import {UtilModule} from '../../service/util.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CompanyRoutingModule,
    MaterialModule,
    NgxEchartsModule,
    NgbModule,
    NgxPageScrollModule,
    FrameModule,
    TreeModule,
    IndentedTreeModule,
    UtilModule
  ],
  declarations: [
    CompanyComponent,
    PersonModal,
    StructureModal,
    ...routedComponent
  ],
  entryComponents: [
    PersonModal,
    StructureModal
  ]
})
export class CompanyModule {
}

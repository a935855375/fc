import {NgModule} from '@angular/core';
import {CompanyComponent} from './company.component';
import {CompanyRoutingModule, routedComponent} from './company.routing.module';
import {MaterialModule} from '../../material.module';
import {CommonModule} from '@angular/common';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {CompanyService} from '../../service/company.service';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MaterialModule,
    NgxEchartsModule,
    NgxPageScrollModule
  ],
  declarations: [
    CompanyComponent,
    ...routedComponent
  ],
})
export class CompanyModule {
}

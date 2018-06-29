import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenealogyRoutingModule, routedComponent} from './genealogy-routing.module';
import {GenealogyComponent} from './genealogy.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgxPageScrollModule} from 'ngx-page-scroll';

@NgModule({
  imports: [
    CommonModule,
    GenealogyRoutingModule,
    NgxEchartsModule,
    NgxPageScrollModule
  ],
  declarations: [
    GenealogyComponent,
    ...routedComponent
  ]
})
export class GenealogyModule {
}

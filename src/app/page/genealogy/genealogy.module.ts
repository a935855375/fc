import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenealogyRoutingModule} from './genealogy-routing.module';
import {GenealogyComponent} from './genealogy.component';
import {routedComponent} from './genealogy-routing.module';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    GenealogyRoutingModule,
    NgxEchartsModule
  ],
  declarations: [
    GenealogyComponent,
    ...routedComponent
  ]
})
export class GenealogyModule {
}

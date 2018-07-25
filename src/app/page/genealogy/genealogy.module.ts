import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenealogyRoutingModule, routedComponent} from './genealogy-routing.module';
import {GenealogyComponent} from './genealogy.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {GraphMudule} from '../../chart/graph/graph.mudule';
import {TreeModule} from '../../chart/tree/tree.module';
import {StructureModule} from '../../chart/structure/structure.module';

@NgModule({
  imports: [
    CommonModule,
    GenealogyRoutingModule,
    NgxEchartsModule,
    NgxPageScrollModule,
    GraphMudule,
    TreeModule,
    StructureModule
  ],
  declarations: [
    GenealogyComponent,
    ...routedComponent
  ]
})
export class GenealogyModule {
}

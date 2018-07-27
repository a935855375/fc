import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenealogyRoutingModule, routedComponent} from './genealogy-routing.module';
import {GenealogyComponent} from './genealogy.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {GraphMudule} from '../../chart/graph/graph.mudule';
import {TreeModule} from '../../chart/tree/tree.module';
import {StructureModule} from '../../chart/structure/structure.module';

@NgModule({
  imports: [
    CommonModule,
    GenealogyRoutingModule,
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

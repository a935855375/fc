import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from '../../material.module';
import {SearchBossRoutingModule} from './search-boss-routing.module';
import {SearchBossComponent} from './search-boss.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    SearchBossRoutingModule,
    MaterialModule
  ],
  declarations: [
    SearchBossComponent,
  ]
})
export class SearchBossModule {
}

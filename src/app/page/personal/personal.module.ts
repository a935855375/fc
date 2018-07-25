import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from '../../material.module';
import {PersonalRoutingModule, routedComponent} from './personal-routing.module';
import {PersonalComponent} from './personal.component';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    PersonalRoutingModule,
    MaterialModule,
    NgZorroAntdModule
  ],
  declarations: [
    PersonalComponent,
    ...routedComponent
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}]
})
export class PersonalModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrandInfoComponent} from './brand-info.component';

const routes: Routes = [
  {path: '', component: BrandInfoComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BrandInfoRoutingMudule {
}

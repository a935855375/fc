import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './page/login/login.component';
import {RegisterComponent} from './page/register/register.component';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {path: 'search', loadChildren: './page/search/search.module#SearchModule'},
  {path: 'frame', loadChildren: './page/frame/frame.module#FrameModule'},
  {path: 'company', loadChildren: './page/company/company.module#CompanyModule'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'find-relation', loadChildren: './page/find-relation/find-relation.module#FindRelationModule'},
  {path: 'search-boss', loadChildren: './page/search-boss/search-boss.module#SearchBossModule'},
  {path: 'dashboard', loadChildren: './page/dashboard/dashboard.module#DashboardModule'},
  {path: 'genealogy', loadChildren: './page/genealogy/genealogy.module#GenealogyModule'},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

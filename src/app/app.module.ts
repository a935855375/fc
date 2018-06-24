import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginComponent} from './page/login/login.component';
import {RegisterComponent} from './page/register/register.component';
import {FooterComponent} from './page/frame/footer/footer.component';
import {HeaderComponent} from './page/frame/header/header.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {AuthService} from './service/auth.service';
import {CommonService} from './service/common.service';
import {AuthInterceptor} from './service/auth-interceptor';
import { CompanyComponent } from './page/company/company.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    AuthService,
    CommonService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

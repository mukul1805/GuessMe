import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { CountdownComponent, CountdownModule } from 'ngx-countdown';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { FormsModule } from '@angular/forms';
import { AdminService } from './admin.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FilterComponent } from './admin-page/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    AdminPageComponent,
    AdminLoginComponent,
    FilterComponent,
    // CountdownModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CountdownComponent,
    CountdownModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    })    
  ],

  schemas: [NO_ERRORS_SCHEMA],

  providers: [
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
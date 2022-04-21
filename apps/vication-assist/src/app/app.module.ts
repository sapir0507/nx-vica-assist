import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '@proj/ui';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from '@proj/header';
import { WebpageComponent } from './webpage/webpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './modules/login/login.module';
import { RegisterModule } from './modules/register/register.module';
import { HomepageModule } from './modules/homepage/homepage.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, 
    WebpageComponent
  ],
  imports: [
    BrowserModule, 
    LoginModule,
    RegisterModule,
    HomepageModule,
    AppRoutingModule, 
    UiModule, 
    HeaderModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '@proj/ui';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from '@proj/header';
import { WebpageComponent } from './webpage/webpage.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, WebpageComponent],
  imports: [BrowserModule, AppRoutingModule, UiModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

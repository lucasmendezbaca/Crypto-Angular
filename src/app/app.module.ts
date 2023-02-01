import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PortafolioComponent } from './portafolio/portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainHomeComponent,
    FooterComponent,
    HomeComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

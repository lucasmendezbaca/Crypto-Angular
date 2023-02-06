import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PortafolioComponent } from './portafolio/portafolio.component';

import { ApiService } from './api.service';
import { AuthenticationService } from './authentication.service';
import { BackendService } from './backend.service';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetalleMonedaComponent } from './detalle-moneda/detalle-moneda.component';

// import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
// var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainHomeComponent,
    FooterComponent,
    HomeComponent,
    PortafolioComponent,
    LoginComponent,
    RegisterComponent,
    DetalleMonedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [ApiService, AuthenticationService, BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }

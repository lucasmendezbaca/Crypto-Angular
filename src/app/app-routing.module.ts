import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DetalleMonedaComponent } from './detalle-moneda/detalle-moneda.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portafolio', component: PortafolioComponent, canActivate: [AuthGuard] },
  { path: 'registrarse', component: RegisterComponent },
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'portafolio/detalle-moneda/:id', component: DetalleMonedaComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

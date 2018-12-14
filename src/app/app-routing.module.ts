import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PortadaComponent } from './components/portada/portada.component';
import { TiendaComponent } from './components/tienda/tienda.component';

const routes: Routes = [
	{ path: 'home', component: PortadaComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'registro', component: RegistroComponent },
	{ path: 'tienda', component: TiendaComponent },
	{ path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';
import { HomeComponent } from './components/home/home.component';
import { NuevoComponent } from './components/presupuesto/nuevo/nuevo.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { PanelComponent } from './components/panel/panel.component';
import { ConvertidorComponent } from './components/convertidor/convertidor.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { LoginComponent } from './components/login/login.component';
import { ItinerariosComponent } from './components/itinerarios/itinerarios.component';
import { TipsypreguntasfrecuentesComponent } from './components/tipsypreguntasfrecuentes/tipsypreguntasfrecuentes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetallesComponent } from './components/novedades/detalles/detalles.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TerminosycondicionesComponent } from './components/terminosycondiciones/terminosycondiciones.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'convertidor', component:ConvertidorComponent},
  {path: 'presupuestos', component:PresupuestoComponent},
  {path: 'cotizaciones', component:PanelComponent},
  {path: 'novedades', component:NovedadesComponent,
         children:[{path: 'detalles', component:DetallesComponent}]},
  {path: 'comentarios', component:ComentariosComponent},
  {path: 'itinerarios', component:ItinerariosComponent},
  {path: 'tipsypreguntasfrecuentes', component:TipsypreguntasfrecuentesComponent},
  {path: 'nuevoPresupuesto', component:NuevoComponent},
  {path: 'login',component:LoginComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'terminosycondiciones', component:TerminosycondicionesComponent},
  {path: '**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

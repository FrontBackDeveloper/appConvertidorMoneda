import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';
import { HomeComponent } from './components/home/home.component';
import { NuevoComponent } from './components/presupuesto/nuevo/nuevo.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'presupuestos', component:PresupuestoComponent},
  {path: 'cotizaciones', component:CotizacionesComponent},
  {path: 'nuevoPresupuesto', component:NuevoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

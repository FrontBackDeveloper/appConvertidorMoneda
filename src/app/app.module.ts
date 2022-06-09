import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PanelComponent } from './components/panel/panel.component';
import { HomeComponent } from './components/home/home.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';
import { FooterComponent } from './components/footer/footer.component';
import { NuevoComponent } from './components/presupuesto/nuevo/nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PanelComponent,
    HomeComponent,
    PresupuestoComponent,
    CotizacionesComponent,
    FooterComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

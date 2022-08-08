import { LOCALE_ID, NgModule } from '@angular/core';
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

import { ApiCotizacionesService } from './servicios/api-cotizaciones.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenuComponent } from './components/menu/menu.component';
import { ConvertidorComponent } from './components/convertidor/convertidor.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { LoginComponent } from './components/login/login.component';
import { ItinerariosComponent } from './components/itinerarios/itinerarios.component';
import { TipsypreguntasfrecuentesComponent } from './components/tipsypreguntasfrecuentes/tipsypreguntasfrecuentes.component';

import localePy from '@angular/common/locales/es-PY';
import { registerLocaleData } from '@angular/common';
import { ContactoComponent } from './components/contacto/contacto.component';
registerLocaleData(localePy, 'es');


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PanelComponent,
    HomeComponent,
    PresupuestoComponent,
    CotizacionesComponent,
    FooterComponent,
    NuevoComponent,
    MenuComponent,
    ConvertidorComponent,
    NovedadesComponent,
    ComentariosComponent,
    LoginComponent,
    ItinerariosComponent,
    TipsypreguntasfrecuentesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiCotizacionesService, {provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

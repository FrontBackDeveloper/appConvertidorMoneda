import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICotizaciones } from 'src/data/ICotizaciones';

@Injectable({
  providedIn: 'root'
})
export class ApiCotizacionesService {

  constructor(private http: HttpClient) { }

  obtenerDolarOficial(): Observable<ICotizaciones> {
    return this.http.get<ICotizaciones>("/api/dolaroficial");
  }
  obtenerDolarBlue(): Observable<ICotizaciones> {
    return this.http.get<ICotizaciones>("/api/dolarblue");
  }
  obtenerDolarTurista(): Observable<ICotizaciones> {
    return this.http.get<ICotizaciones>("/api/dolarturista");
  }

  obtenerEuroOficial(): Observable<ICotizaciones> {
    return this.http.get<ICotizaciones>("/api/euro/nacion");
  }
  obtenerDolarBBVA(): Observable<ICotizaciones>{
    return this.http.get<ICotizaciones>("/api/bbva");
  }
  obtenerDolarGalicia(): Observable<ICotizaciones>{
    return this.http.get<ICotizaciones>("/api/galicia");
  }
}

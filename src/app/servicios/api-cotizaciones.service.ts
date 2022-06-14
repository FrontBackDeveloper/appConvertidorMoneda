import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICotizaciones } from 'src/data/ICotizaciones';

@Injectable({
  providedIn: 'root'
})
export class ApiCotizacionesService {

  constructor(private http: HttpClient) { }

  obtenerDolarOficial(): Observable<any> {
    return this.http.get<any>("/api/dolaroficial");
  }
  obtenerDolarBlue(): Observable<any> {
    return this.http.get<any>("/api/dolarblue");
  }
  obtenerDolarTurista(): Observable<any> {
    return this.http.get<any>("/api/dolarturista");
  }
  obtenerEuroOficial(): Observable<any> {
    return this.http.get<any>("/api/euro/nacion");
  }
}

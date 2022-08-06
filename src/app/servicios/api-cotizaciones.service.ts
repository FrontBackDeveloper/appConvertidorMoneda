import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICotizaciones } from 'src/data/ICotizaciones';


@Injectable({
  providedIn: 'root'
})
export class ApiCotizacionesService {

  constructor(private http: HttpClient) {}

  urlBase : string = "https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api";

  obtenerDolarOficial(): Observable<any> {
    return this.http.get<ICotizaciones>(this.urlBase + "/dolaroficial");
  }
  obtenerDolarBlue(): Observable<any> {
    return this.http.get<ICotizaciones>(this.urlBase + "/dolarblue");
  }
  obtenerDolarCCL(): Observable<any> {
    return this.http.get<ICotizaciones>(this.urlBase + "/contadoliqui");
  }
  obtenerDolarPromedio(): Observable<any> {
    return this.http.get<ICotizaciones>(this.urlBase + "/dolarpromedio");
  }
  obtenerDolarBolsa(): Observable<any> {
    return this.http.get<ICotizaciones>(this.urlBase + "/dolarbolsa");
  }
  obtenerDolarTurista(): Observable<any> {
    return this.http.get<ICotizaciones>(this.urlBase + "/dolarturista");
  }

  obtenerEuroOficial(): Observable<any> {
    return this.http.get<ICotizaciones>(this.urlBase + "/euro/nacion");
  }
  obtenerDolarBBVA(): Observable<any>{
    return this.http.get<ICotizaciones>(this.urlBase + "/bbva");
  }
  obtenerDolarGalicia(): Observable<any>{
    return this.http.get<ICotizaciones>(this.urlBase + "/galicia");
  }
  obtenerDolarXBanco(nombre:string): Observable<any>{
    return this.http.get<ICotizaciones>(this.urlBase + "/" + nombre);
  }
}

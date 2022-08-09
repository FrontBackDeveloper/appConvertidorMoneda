import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  urlBase:string = "http://api.mediastack.com/v1/news"; 
  tokenApi:string = "8e5ca7a3ddc41ff222891de0181051c2";
  obtenerNoticias():Observable<any>{
    const params = new HttpParams()
                  .set('access_key', this.tokenApi)
                  .set('languajes','es')
                  .set('sources','-elsolquilmes, -diariodecuyo, -primeraedicionweb, -Iv7, -laopinion, -elretratodehoy, -genteba, -losandes')
                  .set('countries','ar')
                  .set('keywords', 'dolar + turista');

    return this.http.get<any>('../assets/data/data.json')
  }
}

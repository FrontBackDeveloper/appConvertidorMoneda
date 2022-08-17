import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IComentarios } from 'src/data/IComentarios';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  

  constructor(private http: HttpClient) { }
  urlBase:string = "http://backend/comentarios"; 

  
 //obtenerComentarios(): Observable<IComentarios[]> {
 //  return this.http.get<IComentarios>(this.urlBase + "/traer");
 // }
 
  obtenerComentarios():Observable<IComentarios>{
    return this.http.get<IComentarios>('../assets/data/comentarios.json')
  }
  publicarComentario(formComentarios: IComentarios):Observable<IComentarios>{
    return this.http.post<IComentarios>(this.urlBase + "/publicar" , formComentarios);
  }
  eliminarComentario(id_comentario: number): Observable<unknown> {
    const url = `${this.urlBase + "/eliminar"}/${id_comentario}`; 
    return this.http.delete(url);
    }
}

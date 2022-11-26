import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IComentarios } from 'src/data/IComentarios';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  

  constructor(private http: HttpClient) { }
  urlBase:string = "http://localhost:8080/comentarios"; 

  
  obtenerComentarios(): Observable<IComentarios[]> {
   return this.http.get<IComentarios[]>(this.urlBase + "/listar");
  }

  agregarComentario(formComentarios: IComentarios):Observable<IComentarios>{
    return this.http.post<IComentarios>(this.urlBase + "/crear" , formComentarios);
  }

  eliminarComentario(id_comentario: number): Observable<unknown> {
    const url = `${this.urlBase + "/eliminar"}/${id_comentario}`; 
    return this.http.delete(url);
    }
}

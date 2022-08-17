import { Component, OnInit } from '@angular/core';
import { ComentariosService } from 'src/app/servicios/comentarios.service';

@Component({
  selector: 'app-lista-comentarios',
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.css']
})
export class ListaComentariosComponent implements OnInit {
  comentariosList:any []=[];

  constructor(private comentariosSVC : ComentariosService) { }

  ngOnInit(): void {
    this.comentariosSVC.obtenerComentarios().subscribe(
      (data:any) => {
        this.comentariosList=data.data;
        console.log("datos mockeados" + data);
      }
      );
  }

}

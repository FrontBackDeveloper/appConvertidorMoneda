import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/servicios/noticias.service';
import { INoticia } from 'src/assets/data/INoticia';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  noticiasList:any[]=[];

  constructor(private noticiasSVC:NoticiasService) { }

  ngOnInit(): void {
    this.noticiasSVC.obtenerNoticias().subscribe(
      (data:any) => {
        this.noticiasList=data.data;
      console.log("datos del API mediastack " + data.data.author);
      }
      );
  }

}

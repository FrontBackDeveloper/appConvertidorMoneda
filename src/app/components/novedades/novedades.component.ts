import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/servicios/noticias.service';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {


  constructor(private noticiasSVC:NoticiasService) { }

  ngOnInit(): void {
    this.noticiasSVC.obtenerNoticias().subscribe(
      (data) => {
      console.log("datos del API mediastack " + data);
      }
      );
  }

}

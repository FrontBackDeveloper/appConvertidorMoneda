import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/servicios/noticias.service';
import { INoticia } from 'src/assets/data/INoticia';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  noticiasList:any[]=[];
  
  constructor(private noticiasSVC:NoticiasService) { }

  ngOnInit(): void {
    this.noticiasSVC.obtenerNoticias().subscribe(
      (data:any) => {
        this.noticiasList=data.data;
      console.log('data');
      }
      );
  }

}

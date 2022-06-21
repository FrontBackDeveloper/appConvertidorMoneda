import { Component, OnInit } from '@angular/core';
import { ApiCotizacionesService } from 'src/app/servicios/api-cotizaciones.service';
import { ICotizaciones } from 'src/data/ICotizaciones';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  
  infoDolarOficial?:any;
  infoDolarBlue?:any;
  infoDolarTurista?:any;
  infoEuroOficial?:any;
  mostrar:boolean = false;
  valor:number =1;
  cotiza:number = 1;
  titulo:string = "Euro Oficial Banco Nación";

  constructor(private ApiService: ApiCotizacionesService) {
                
               }

 

  ngOnInit(): void {
    this.ApiService.obtenerDolarOficial().subscribe(
      (dataDOF) => { 
        this.infoDolarOficial=dataDOF;
      }
    );
    this.ApiService.obtenerDolarBlue().subscribe(
      (dataDOB) => { 
        this.infoDolarBlue=dataDOB;
      }
    );
    this.ApiService.obtenerDolarTurista().subscribe(
      (dataDOT) => { 
        this.infoDolarTurista=dataDOT;       
      }
    );
   
    this.ApiService.obtenerEuroOficial().subscribe(
      (dataEUOF: ICotizaciones) => { 
        this.infoEuroOficial=dataEUOF;
      }
    );
   
  }

  calcularEOF(titulo:string, valor:number){
    this.titulo=titulo;
    this.cotiza=this.infoEuroOficial.venta;
  }
  calcularDOF(titulo:string, valor:number){ 
    this.titulo=titulo;
    this.cotiza=this.infoDolarOficial.venta;
  }
  calcularBL(titulo:string, valor:number){  
    this.titulo=titulo;
    this.cotiza=this.infoEuroOficial.venta;
  }
 

}

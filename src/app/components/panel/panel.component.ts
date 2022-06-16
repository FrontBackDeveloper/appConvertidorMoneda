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
  nombreMoneda:string = '';
  resultado?:number;
  valor?:number;

  constructor(private ApiService: ApiCotizacionesService) { }

 

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
        console.log(dataEUOF);
        console.log("Euro Oficial Venta= " + this.infoEuroOficial.venta + "fecha: " + this.infoEuroOficial.fecha);
      }
    );
   
  }

  convertir(moneda:number, titulo:string){
    console.log("precio de venta:" + moneda);
    console.log(titulo);
    this.nombreMoneda = titulo;
  
  }
 
}

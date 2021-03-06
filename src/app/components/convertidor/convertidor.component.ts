import { Component, OnInit } from '@angular/core';
import { ApiCotizacionesService } from 'src/app/servicios/api-cotizaciones.service';
import { ICotizaciones } from 'src/data/ICotizaciones';


@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  infoDolarOficial= {
    "fecha":"",
    "compra": 0,
    "venta":0
  };

infoDolarBlue= {
  "fecha":"",
  "compra": 0,
  "venta":0
};
infoEuroOficial= {
    "fecha":"",
    "compra": 0,
    "venta":0
  };
infoDolarBBVA= {
  "fecha":"",
  "compra": 0,
  "venta":0
};
infoDolarGalicia= {
    "fecha":"",
    "compra": 0,
    "venta":0
  };

valoringresado:number =1;
cotizacion:number = 1;
cotizacionEnviada?:number;
titulo:string = "Euro Oficial Banco Nación";


constructor(private ApiService: ApiCotizacionesService) {

}

ngOnInit(): void {
          this.ApiService.obtenerDolarOficial().subscribe(
          (data:ICotizaciones) => {
          this.infoDolarOficial = data;
          
          }
          );
          this.ApiService.obtenerDolarBlue().subscribe(
          (dataDOB:ICotizaciones) => { 
          this.infoDolarBlue = dataDOB;
          
          }
          );   
          this.ApiService.obtenerEuroOficial().subscribe(
          (dataEUOF:any) => { 
          this.infoEuroOficial = dataEUOF;
          
          }
          );
          this.ApiService.obtenerDolarBBVA().subscribe(
          (dataBBVA:any) => { 
          this.infoDolarBBVA = dataBBVA;
          
          }
          );
          this.ApiService.obtenerDolarGalicia().subscribe(
          (dataGAL:any) => { 
          this.infoDolarGalicia = dataGAL;
         
          }
          );

          }

calcular(titulo:string, cotizacionEnviada:number){
          this.titulo=titulo;
          this.cotizacion=cotizacionEnviada;

          }

}

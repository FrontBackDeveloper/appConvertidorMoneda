import { Component, OnInit } from '@angular/core';
import { ApiCotizacionesService } from 'src/app/servicios/api-cotizaciones.service';
import { ICotizaciones } from 'src/data/ICotizaciones';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
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
  infoDolarXBanco= {
                      "fecha":"",
                      "compra": 0,
                      "venta":0
                    };                 

  valoringresado:number =1;
  cotizacion:number = 1;
  cotizacionEnviada?:number;
  titulo:string = "Euro Oficial Banco Nación";
  opcionBancos:string = "nacion";

  constructor(private ApiService: ApiCotizacionesService) {
                
               }

  ngOnInit(): void {
    this.ApiService.obtenerDolarOficial().subscribe(
      (data:ICotizaciones) => {
        this.infoDolarOficial = data;
        console.log("datos del API" + data);
      }
    );
    this.ApiService.obtenerDolarBlue().subscribe(
      (dataDOB:ICotizaciones) => { 
        this.infoDolarBlue = dataDOB;
        console.log("datos del API" + dataDOB);
      
      }
    );   
    this.ApiService.obtenerEuroOficial().subscribe(
      (dataEUOF:any) => { 
        this.infoEuroOficial = dataEUOF;
        console.log("datos del API" + dataEUOF);
      
      }
    );
    this.ApiService.obtenerDolarBBVA().subscribe(
      (dataBBVA:any) => { 
        this.infoDolarBBVA = dataBBVA;
        console.log("datos del API" + dataBBVA);
       
      }
    );
    this.ApiService.obtenerDolarGalicia().subscribe(
      (dataGAL:any) => { 
        this.infoDolarGalicia = dataGAL;
        console.log("datos del API" + dataGAL);
      }
    );
   
  }

  buscarBanco(nombre:string){
    this.ApiService.obtenerDolarXBanco(nombre).subscribe(
      (data:any) => { 
        this.infoDolarXBanco = data;
        console.log("datos del API" + data);
      }
    );
    console.log(nombre);

  }

  calcularEOF(titulo:string, cotizacionEnviada:number){
    this.titulo=titulo;
    this.cotizacion=cotizacionEnviada;
    
  }
  calcularDOF(titulo:string, cotizacionEnviada:number){ 
    this.titulo=titulo;
    this.cotizacion=cotizacionEnviada;
  }
  calcularDOT(titulo:string, cotizacionEnviada:number){ 
    this.titulo=titulo;
    this.cotizacion=cotizacionEnviada;
  }
  calcularBL(titulo:string, cotizacionEnviada:number){  
    this.titulo=titulo;
    this.cotizacion=cotizacionEnviada;
  } 

}

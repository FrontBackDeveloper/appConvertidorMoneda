import { Component, OnInit } from '@angular/core';
import { ApiCotizacionesService } from 'src/app/servicios/api-cotizaciones.service';
import { ICotizaciones } from 'src/data/ICotizaciones';
import { FormsModule } from '@angular/forms';

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
  infoDolarCCL= {
                    "fecha":"",
                    "compra": 0,
                    "venta":0
                  };
  infoDolarPromedio= {
                    "fecha":"",
                    "compra": 0,
                    "venta":0
                  };
  infoDolarBolsa= {
                    "fecha":"",
                    "compra": 0,
                    "venta":0
                  };
  infoDolarTurista= {
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
      }
    );
    this.ApiService.obtenerDolarBlue().subscribe(
      (dataDOB:ICotizaciones) => { 
        this.infoDolarBlue = dataDOB;
      
      }
    );   
    this.ApiService.obtenerDolarCCL().subscribe(
      (data:ICotizaciones) => { 
        this.infoDolarCCL = data;
      
      }
    );   
    this.ApiService.obtenerDolarPromedio().subscribe(
      (data:ICotizaciones) => { 
        this.infoDolarPromedio = data;
       
      }
    );   
    this.ApiService.obtenerDolarBolsa().subscribe(
      (data:ICotizaciones) => { 
        this.infoDolarBolsa = data;
      }
    );   
    this.ApiService.obtenerDolarTurista().subscribe(
      (data:ICotizaciones) => { 
        this.infoDolarTurista = data;
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

  buscarXBanco(nombre:string){
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

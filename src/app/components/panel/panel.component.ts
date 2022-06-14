import { Component, OnInit } from '@angular/core';
import { ApiCotizacionesService } from 'src/app/servicios/api-cotizaciones.service';


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

  constructor(private ApiService: ApiCotizacionesService) { }

  ngOnInit(): void {
    this.ApiService.obtenerDolarOficial().subscribe(
      (data) => { 
        this.infoDolarOficial=data;
      }
    );
    this.ApiService.obtenerDolarBlue().subscribe(
      (data) => { 
        this.infoDolarBlue=data;
      }
    );
    this.ApiService.obtenerDolarTurista().subscribe(
      (data) => { 
        this.infoDolarTurista=data;
        console.log("Dolar turista " + data);
       
      }
    );
    this.ApiService.obtenerEuroOficial().subscribe(
      (data) => { 
        this.infoEuroOficial=data;
        console.log("Euro oficial Bco Nacion: " + data);
      }
    );

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {

  opcion:string = "";

  constructor() { }

  ngOnInit(): void {
  }
  descargarPDF(){
    alert("¡ Se ha descargado el PDF correctamente !");

  }
  buscarPresupuesto(){
    alert("buscando presupuesto");
  }

}

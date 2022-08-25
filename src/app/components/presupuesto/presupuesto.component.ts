import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from 'src/app/servicios/presupuestos.service';
import { IPresupuesto } from 'src/data/IPresupuesto';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {

  opcion:string = "";
  presupuestosList:any[]=[];

  constructor(private presupuestosSVC: PresupuestosService) { }

  ngOnInit(): void {
   
    this.presupuestosSVC.obtenerPresupuestos().subscribe(
      (data:any) => {
        this.presupuestosList=data.data;
      console.log("Datos mockeados de presupuestos" + data);
      }
      );
  }
  descargarPDF(){
    alert("¡ Se ha descargado el PDF correctamente !");

  }
  buscarPresupuesto(){
    alert("buscando presupuesto");
  }

}

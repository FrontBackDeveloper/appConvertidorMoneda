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
  gastosList:any[]=[];
  totalGastos:number=0;
  presupuesto:string="";

  constructor(private presupuestosSVC: PresupuestosService) { }

  ngOnInit(): void {
   
    this.presupuestosSVC.obtenerPresupuestos().subscribe(
      (data:any) => {
        this.presupuestosList=data.data;
      console.log("Datos mockeados de presupuestos " + data);
      }
      );
      this.presupuestosSVC.obtenerGastos().subscribe(
        (data:any) => {
          this.gastosList=data.gastos;
        console.log("Datos mockeados de gastos " +data.gastos);
        }
        );
  }
  descargarPDF(){
    alert("¡ Se ha descargado el PDF correctamente ! (EN DESARROLLO)");

  }
  buscarPresupuesto(nombre:string){
    this.presupuesto=nombre;
   console.log("id de presupuesto " + this.presupuesto);
    alert("buscando presupuesto (EN DESARROLLO)");
  }

}

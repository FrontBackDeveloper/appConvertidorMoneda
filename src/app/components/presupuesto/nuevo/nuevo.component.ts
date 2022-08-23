import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PresupuestosService } from 'src/app/servicios/presupuestos.service';
import { Router } from '@angular/router';
import { IPresupuesto } from 'src/data/IPresupuesto';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {


  isUserLogged: Boolean = false;
  presupuestosList: IPresupuesto[] = [];
  gastosList: IPresupuesto[] = [];
  formPresupuestoNuevo: FormGroup;
  formGastoNuevo: FormGroup;
  isAlert = false;
  fecha_actual = new Date();

  constructor(private formBuilder: FormBuilder,
              private presupuestoSVC: PresupuestosService,
              private router: Router) {
                this.formPresupuestoNuevo = this.formBuilder.group(
                  {
                    id_presupuesto: [''],
                    id_usuario: ['aquí va el id_usuario gusrdado en coquie o Local Storage'],
                    nombre_presupuesto: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(4)]],
                    fecha_publicado: [this.fecha_actual]
                  }
                );
                this.formGastoNuevo = this.formBuilder.group(
                  {
                    id_gasto: [''],
                    nombre_gasto: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(4)]],
                    importe: ['', [Validators.required, Validators.maxLength(20)]],
                    moneda: ['', [Validators.required, Validators.maxLength(20)]],
                    total: ['', [Validators.required, Validators.maxLength(20)]],
                    fecha_publicado: [this.fecha_actual]
                  }
                )
              }

  ngOnInit(): void {
  }

guardarPresupuesto(event: Event){
    alert(" ¡Se ha guardado un nuevo Presupuesto !");
}
guardarGasto(event: Event){
  alert("¡ Se ha agregado un nuevo Gasto al Presupuesto !");
}
get nombrePresupuesto() {
  return this.formPresupuestoNuevo.get('nombre_presupuesto');
}
get nombreGasto() {
  return this.formGastoNuevo.get('nombre_presupuesto');
}
get importe() {
  return this.formGastoNuevo.get('nombre_presupuesto');
}
get moneda() {
  return this.formGastoNuevo.get('nombre_presupuesto');
}
get total() {
  return this.formGastoNuevo.get('nombre_presupuesto');
}


}
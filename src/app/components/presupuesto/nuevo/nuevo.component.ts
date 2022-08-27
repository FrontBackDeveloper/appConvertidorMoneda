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
  isAlert = false;
  fecha_actual = new Date();

  constructor(private formBuilder: FormBuilder,
              private presupuestoSVC: PresupuestosService,
              private router: Router) {
                this.formPresupuestoNuevo = this.formBuilder.group(
                  {
                    nombre_presupuesto: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
                    fecha_publicado: [this.fecha_actual],
                    id_usuario: ['id_usuario']
                  }
                );
                
              }

  ngOnInit(): void {
  }

guardarPresupuesto(event: Event){
    console.log(this.formPresupuestoNuevo.value);
    alert(" ¡Se ha guardado un nuevo Presupuesto ! (EN DESARROLLO)");
    this.router.navigate(['/verpresupuestos']);
}

get nombrePresupuesto() {
  return this.formPresupuestoNuevo.get('nombre_presupuesto');
}

}
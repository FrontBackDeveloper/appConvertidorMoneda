import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/internal/operators/map';
import { AuthService } from 'src/app/servicios/auth.service';
@Component({
  selector: 'app-cuentaregresiva',
  templateUrl: './cuentaregresiva.component.html',
  styleUrls: ['./cuentaregresiva.component.css']
})
export class CuentaregresivaComponent implements OnInit {

  isUserLogged: Boolean = false;
  cuenta_regresiva_List: any[] = [];
  formCuentaRegresivaNuevo: FormGroup;
  finishDate?: Date;

  finishDateString= "2023-03-07 23:50:00";
  time!: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authservice: AuthService) {
      this.formCuentaRegresivaNuevo = this.formBuilder.group(
        {
          titulo: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
          fecha_limite: ['', [Validators.required]]
        }
      );
      
    }
  

  ngOnInit(): void {
    
      this.isUserLogged = this.authservice.isUserLogged();
      
    
    // Inicializamos el momento que falta hasta llegaral tiempo objetivo con valores en 0
    this.time = {
      days: 0, hours: 0, minutes: 0, seconds: 0
    };
    // Creamos la fecha a partir de la fecha en formato string AAAA-MM-dd HH:mm:ss
    this.finishDate = new Date(this.finishDateString); 

    let counterTimer$ = this.start().subscribe((_) => {
      if (this.time.days <= 0) {
          this.time = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            days: 0
          }
          counterTimer$.unsubscribe();
      }
  });
  }

  updateTime() {
    
    const now = new Date();
    const diff = this.finishDate!.getTime() - now.getTime();
   

    // Cálculos para sacar lo que resta hasta ese tiempo objetivo / final
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);
    
    // La diferencia que se asignará para mostrarlo en la pantalla
    this.time.days = days;
    this.time.hours = hours - days * 24;
    this.time.minutes = mins - hours * 60;
    this.time.seconds = secs - mins * 60;
  }
  
  // Ejecutamos la acción cada segundo, para obtener la diferencia entre el momento actual y el objetivo
  start() {
    return interval(1000).pipe(
      map((x: number) => {
        this.updateTime();
        return x;
      })
    );
  }
 guardar(){
    alert("¡Se ha guardado correctamente! (EN DESARROLLO)");
    
  }
  
}

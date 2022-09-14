import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form: FormGroup;
  loginError: Boolean = false;
  passwordIncorrecto: boolean = false;

  constructor(
              private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder) {
                
              this.form = this.formBuilder.group(
        {
          nombre_usuario:  [null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
          email:           [null, [Validators.required, Validators.email]],
          password:        [null, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
          terminosycondiciones: [null, [Validators.requiredTrue]]
          
        });
     }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
          console.log(this.form.value);
          alert("¡ Registro de usuario nuevo exitoso (EN DESARROLLO) !");
          this.router.navigate(['/home']);
   
    };
  
  get Nombre() {
    return this.form.get('nombre_usuario');
  }
  get Email() {
    return this.form.get('email');
  }
  get Password() {
    return this.form.get('password');
  }
  get Terminos() {
    return this.form.get('terminosycondiciones');
  }


}

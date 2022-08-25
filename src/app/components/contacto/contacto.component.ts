import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IContacto } from 'src/data/IContacto';
import { ContactoService } from 'src/app/servicios/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  isUserLogged: Boolean = false;
  contactoList: IContacto[] = [];
  formContacto: FormGroup;
  isAlert = false;
  fecha_actual = new Date();
  constructor(private formBuilder: FormBuilder,
              private contactoSVC: ContactoService,
              private router: Router) {
                this.formContacto = this.formBuilder.group(
                  {
                    id_usuario: ['aquí va el id_usuario gusrdado en coquie o Local Storage'],
                    nombre_usuario: ['aquí va el nombred_usuario guardado en coquie o Local Storage'],
                    nombre: ['', [Validators.required,  Validators.minLength(4), Validators.maxLength(20)]],
                    telefono: ['', [Validators.required,  Validators.minLength(10),Validators.maxLength(20)]],
                    email: ['', [Validators.required, Validators.email]],
                    asunto: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
                    texto: ['', [Validators.required,  Validators.minLength(10), Validators.maxLength(200)]],
                    fecha_enviado: [this.fecha_actual]
                  }
                )
               }

  ngOnInit(): void {
  }
  onSubmit(event:Event){
    console.log(this.formContacto.value);
    alert("¡ Se ha enviado exitósamente !");
    this.router.navigate(['/home']);
  }
  get Nombre(){
    return this.formContacto.get('nombre');
  }
  get Telefono(){
    return this.formContacto.get('telefono');
  }
  get Email(){
    return this.formContacto.get('email');
  }
  get Asunto(){
    return this.formContacto.get('asunto');
  }
  get Texto(){
    return this.formContacto.get('texto');
  }

}

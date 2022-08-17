import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComentariosService } from 'src/app/servicios/comentarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  formComentarios: FormGroup;
  isAlert = false;

  constructor( private formBuilder: FormBuilder,
               private comentariosSVC: ComentariosService,
               private router: Router) {
    this.formComentarios = this.formBuilder.group(
      {
        id_comentario: ['', [Validators.required]],
        id_usuario: ['', [Validators.required]],
        nombre_usuario: ['', [Validators.required]],
        foto_perfil: [''],
        texto: ['', [Validators.required, Validators.maxLength(200)]],
        fecha_publicado: ['date']
      }
    )
   }

  ngOnInit(): void {
   
  }
  public publicarComentario(event: Event){
    
    this.clearFormulario();
    this.isAlert=true;
    console.log("formulario de comentarios" + this.formComentarios.value);
   
  }

  clearFormulario() {
    this.formComentarios.setValue({
      id_comentario: '',
      id_usuario: '',
      nombre_usuario: '',
      foto_perfil: '',
      texto: '',
      fecha_publicado: ''
    })
  }
  get Texto() {
    return this.formComentarios.get('texto');
  }

}
 
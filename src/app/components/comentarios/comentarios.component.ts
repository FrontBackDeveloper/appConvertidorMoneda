import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComentariosService } from 'src/app/servicios/comentarios.service';
import { Router } from '@angular/router';
import { IComentarios } from 'src/data/IComentarios';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  isUserLogged: Boolean = false;
  comentariosList: IComentarios[] = [];
  formComentarios: FormGroup;
  isAlert = false;
  fecha_actual = new Date();

  constructor( private formBuilder: FormBuilder,
               private comentariosSVC: ComentariosService,
               private router: Router) {
    this.formComentarios = this.formBuilder.group(
      {
        id_comentario: ['aquí va el id'],
        id_usuario: ['aquí va el id_usuario gusrdado en coquie o Local Storage'],
        nombre_usuario: ['aquí va el nombred_usuario gusrdado en coquie o Local Storage'],
        foto_perfil: ['aquí va el foto_perfil gusrdado en coquie o Local Storage'],
        texto: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(10)]],
        fecha_publicado: [this.fecha_actual]
      }
    )
   }

  ngOnInit(): void {
   
  }

  reloadData() {
    this.comentariosSVC.obtenerComentarios().subscribe(
      (data:any) => {
        this.comentariosList = data.data;
      }
    );
   
  }

  publicarComentario(event: Event){
   let comentario: IComentarios = this.formComentarios.value;
   console.log(comentario);
   this.isAlert=true;
   this.clearFormulario();
   
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
 
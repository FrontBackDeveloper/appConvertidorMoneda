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
        id_usuario: ['id_usuario'],
        nombre_usuario: ['nombre_de_usuario'],
        foto_perfil: ['foto_perfil'],
        texto: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
        fecha_publicado: [this.fecha_actual]
      }
    )
   }

  ngOnInit(): void {
  
   this.reloadData();
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
   if (confirm(" ¡ Enviado exitósamente !, desea volver a comentar? (EN DESARROLLO)")){
      this.clearFormulario();
      this.reloadData();
   }else this.router.navigate(['/home']);
   
  }

  clearFormulario() {
    this.formComentarios.setValue({
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
 
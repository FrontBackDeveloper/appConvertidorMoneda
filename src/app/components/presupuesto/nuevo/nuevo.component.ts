import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

nuevoPresupuesto(){
    alert("Se ha generado un nuevo Presupuesto");
}
}
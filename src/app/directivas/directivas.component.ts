import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  standalone: true,
  imports: [],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {
    //esta logeado o no el usuario
    usuarioLogeado = true
    //listado de empleados id, nombre, sueldo, activo
    usuarios = [
      {
        id: 1,
        nomber: "axel",
        sueldo: 10000,
        activo: true
      },
      {
        id: 2,
        nomber: "miguel",
        sueldo: 9000,
        activo: true
      },
      {
        id: 3,
        nomber: "omar",
        sueldo: 8000,
        activo: true
      },
      {
        id: 4,
        nomber: "jose",
        sueldo: 7000,
        activo: false
      },
      {
        id: 5,
        nomber: "angel",
        sueldo: 6000,
        activo: true
      },
      {
        id: 6,
        nomber: "alex",
        sueldo: 5000,
        activo: true
      },
      {
        id: 7,
        nomber: "pepe",
        sueldo: 4000,
        activo: false
      },
      {
        id: 8,
        nomber: "patroclo",
        sueldo: 3000,
        activo: true
      },
      {
        id: 9,
        nomber: "ricardo",
        sueldo: 2000,
        activo: true
      },
      {
        id: 10,
        nomber: "pobre",
        sueldo: 1000,
        activo: false
      }
    ]
}

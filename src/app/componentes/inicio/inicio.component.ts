import { Component } from '@angular/core';

import { CarroService } from "../../carro.service";


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private _cs:CarroService){
    this._cs.setProductosCarroService(localStorage.getItem("carro").split(",").length);
  }
}

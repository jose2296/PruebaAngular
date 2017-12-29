import { Component  } from '@angular/core';

import { CarroService } from "../../carro.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{


  totalProductosCarro = 0;

  constructor(private _cs:CarroService){
    this._cs.event.subscribe(prodsCarro => {
      this.totalProductosCarro = this._cs.totalProductosCarro;
    })
    //this.productosCarro = _cs.productosCarro;
  }



}

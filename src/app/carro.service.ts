import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class CarroService {

  event = new EventEmitter();   

  totalProductosCarro = 0;

  constructor() { }

  setProductosCarroService(productosCarro){
    this.totalProductosCarro = productosCarro;
    this.event.emit(this.totalProductosCarro);
  }

}

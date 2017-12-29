import { Component, Input } from '@angular/core';

import { DataserviceService } from "../../dataservice.service";
import { CarroService } from "../../carro.service";


import { Router } from '@angular/router'

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent {

  productos: any;
  productosCarro = [];
  productosCarroId: any

  //verCarro: boolean = true;
  carroCargado:boolean = false;
  total: number = 0;

  totalProductosCarro = 0;


  arrayProdsCarroCant = [];


  carroVacio = false;

  constructor(router: Router, private _ds: DataserviceService,private _cs:CarroService) {
    //this.verCarro = (router.url === "/carro")

    this.productosCarroId = localStorage.getItem("carro") ? localStorage.getItem("carro").split(",") : [];

    if (this.productosCarroId.length > 0 /*&& this.verCarro*/) {

      _ds.productos.valueChanges().subscribe((data) => {
        this.productos = data;
        this.carroCargado = true;
        this.carroVacio = false;
      

        this.getProductosCarro(_ds);
      });
    }else{
      this.carroVacio = true;
      
    }
  }


  getProductosCarro(_ds: DataserviceService) {
    this.productosCarro = [];
    this.productosCarroId.forEach(variable => {
      this.productosCarro.push(this.productos[variable])
    })

    this.arrayProdsCarroCant = [];
    
            for (var i = 0; i < this.productos.length; i++) {
              this.arrayProdsCarroCant.push(0);
            }
    
            for (var j = 0; j < this.arrayProdsCarroCant.length; j++) {
              for (var k = 0; k < this.productosCarroId.length; k++) {
                if (this.productosCarroId[k] == j) {
                  this.arrayProdsCarroCant[j]++;
                }
              }
            }
    
    
            for (var i = 0; i < this.productosCarro.length; i++) {
              for (var k = i + 1; k < this.productosCarro.length; k++) {
                if (this.productosCarro[i] == this.productosCarro[k]) {
                  this.productosCarro.splice(i, 1);
                  i--;
                  k--;
                }
              }
            }
            this.calcularPrecioCarro();

            this.totalProductosCarro = 0;

            this._cs.setProductosCarroService(this.productosCarroId.length);

  }


  calcularPrecioCarro(){
    this.total = 0;
    this.productosCarro.forEach(variable => {
      this.total += variable.precio * this.arrayProdsCarroCant[variable.id];
    });
  }

  eliminarProducto(id) {

    for (var i = 0; i < this.productosCarroId.length; i++) {
      if (this.productosCarroId[i] == id) {
        this.productosCarroId.splice(i, 1);
        i--;
      }
    }

    if (this.productosCarroId <= 0) {
      this.carroVacio = true;
      this.carroCargado = false;
    }

    this.getProductosCarro(this._ds);
    
    localStorage.setItem("carro", this.productosCarroId.join(","))

    
  }


}

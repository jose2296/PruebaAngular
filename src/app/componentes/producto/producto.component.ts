import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { AngularFireDatabase  } from "angularfire2/database";

import { CarroService } from "../../carro.service";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  productos:any;
  producto:any;

  cargados:boolean = false;

  constructor(db: AngularFireDatabase, private route: ActivatedRoute,private _cs:CarroService) {

    route.params.subscribe(parametros =>{

      db.object('/productos/'+parametros.id).valueChanges().subscribe((a)=>{
        this.producto = a
        // console.log(parametros.id);
        // // console.log(productos[parametros.id]);
        // this.producto = this.productos[parametros.id];
        //

        this.cargados = true;

        this._cs.setProductosCarroService(localStorage.getItem("carro").split(",").length);
      })



    })

  }


  addProductoCarro(id){
    if(localStorage.getItem("carro")){
      localStorage.setItem("carro",localStorage.getItem("carro") + ","+ id);
    }else{
      localStorage.setItem("carro",id)
    }

    this._cs.setProductosCarroService(localStorage.getItem("carro").split(",").length);
  } 



}

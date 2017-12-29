import { Component } from '@angular/core';

//import { AngularFireDatabase  } from "angularfire2/database";
import { DataserviceService } from "../../dataservice.service";

import { CarroService } from "../../carro.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

productos:any;
cargados:boolean = false;
/*
  constructor(db: AngularFireDatabase){

    db.object('/productos').valueChanges().subscribe((a)=>{
      this.productos = a
      this.cargados = true;
    })


  }*/

  constructor(_ds:DataserviceService,private _cs:CarroService){
    _ds.productos.valueChanges().subscribe(data=>this.productos = data);
    this.cargados = true;
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

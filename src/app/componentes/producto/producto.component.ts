import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { AngularFireDatabase  } from "angularfire2/database";


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  // productos: any = [
  //   { id: 0, imagen: "jquery.png", nombre: "Uno", precio: 100, descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  //   { id: 1, imagen: "js.png", nombre: "Dos", precio: 200, descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  //   { id: 2, imagen: "node.png",nombre: "Tres", precio: 300, descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  //   { id: 3, imagen: "Python.png", nombre: "Cuatro", precio: 400, descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  //   { id: 4, imagen: "React.png", nombre: "Cinco", precio: 500, descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  //   { id: 5, imagen: "Vue.png", nombre: "Seis", precio: 600, descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  //   { id: 6, imagen: "js.png", nombre: "Siete", precio: 700, descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." }
  // ]

  productos:any;
  producto:any;

  cargados:boolean = false;

  constructor(db: AngularFireDatabase, private route: ActivatedRoute) {

    route.params.subscribe(parametros =>{

      db.object('/productos/'+parametros.id).valueChanges().subscribe((a)=>{
        this.producto = a
        // console.log(parametros.id);
        // // console.log(productos[parametros.id]);
        // this.producto = this.productos[parametros.id];
        //

        this.cargados = true;
      })



    })

  }



}

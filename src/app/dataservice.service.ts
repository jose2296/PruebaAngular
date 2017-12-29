import { Injectable } from '@angular/core';

import { AngularFireDatabase  } from "angularfire2/database";


@Injectable()
export class DataserviceService {

  productos:any;

  constructor(af:AngularFireDatabase) {
    this.productos = af.list("/productos");
   }

}

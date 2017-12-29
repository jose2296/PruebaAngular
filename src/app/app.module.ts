import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Firebase
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//Rutas
import { app_routing } from './app.routes';


//Componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { CarroComponent } from './componentes/carro/carro.component';


import { DataserviceService } from "./dataservice.service";
import { CarroService } from "./carro.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    InicioComponent,
    ProductosComponent,
    ProductoComponent,
    CarroComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBM80PUXz2_jS00gmhlPlKrU-ncQt7YjpA",
      authDomain: "prubaangular.firebaseapp.com",
      databaseURL: "https://prubaangular.firebaseio.com",
      projectId: "prubaangular",
      storageBucket: "",
      messagingSenderId: "713177060147"
    })

  ],
  providers: [DataserviceService,CarroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

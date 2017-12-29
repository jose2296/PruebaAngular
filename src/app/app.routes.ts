import {RouterModule, Routes} from '@angular/router';


import { InicioComponent, ProductosComponent, ProductoComponent,CarroComponent } from './componentes/paginas';

const app_routes: Routes = [
    {path: 'inicio', component: InicioComponent },
    {path: 'productos', component: ProductosComponent},
    {path: 'carro', component: CarroComponent},
    {path: 'producto/:id', component: ProductoComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const app_routing = RouterModule.forRoot(app_routes);

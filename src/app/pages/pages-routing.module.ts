import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReservaComponent } from './reserva/reserva.component';
import { MisSolicitudesComponent } from './mis-solicitudes/mis-solicitudes.component';
import { MisChatsComponent } from './mis-chats/mis-chats.component';
import { MisCitasComponent } from './mis-citas/mis-citas.component';
import { AjustesComponent } from './ajustes/ajustes.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
        { path: 'inicio', component: InicioComponent},
        { path: 'reserva', component: ReservaComponent},
        { path: 'mis-solicitudes', component: MisSolicitudesComponent},
        { path: 'mis-citas', component: MisCitasComponent},
        { path: 'mis-chats', component: MisChatsComponent},
        { path: 'ajustes', component: AjustesComponent},
      // INPUTS
    //   { path: 'inputs', canActivate: [AuthGuard] ,component: InputsComponent},
    //   { path: 'inputs/new-input', canActivate: [AuthGuard] ,component: NewInputComponent},
    //   { path: 'inputs/edit-input/:id', canActivate: [AuthGuard] ,component: EditInputComponent},
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

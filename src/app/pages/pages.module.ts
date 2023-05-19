import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SidenavComponent } from '../shared/sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ReservaComponent } from './reserva/reserva.component';
import { MisSolicitudesComponent } from './mis-solicitudes/mis-solicitudes.component';
import { MisCitasComponent } from './mis-citas/mis-citas.component';
import { MisChatsComponent } from './mis-chats/mis-chats.component';
import { AjustesComponent } from './ajustes/ajustes.component';



@NgModule({
  declarations: [
    InicioComponent,
    PagesComponent,
    SidenavComponent,
    ReservaComponent,
    MisSolicitudesComponent,
    MisCitasComponent,
    MisChatsComponent,
    AjustesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class PagesModule { }

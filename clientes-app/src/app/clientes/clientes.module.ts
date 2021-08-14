import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';
import { FormsModule } from '@angular/forms';
import { AltaClientesComponent } from './alta-clientes/alta-clientes.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';

@NgModule({
  declarations: [
    AltaClientesComponent,
    ListaClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    ClientesService
  ],
  exports:[
    AltaClientesComponent,
    ListaClientesComponent
  ]
})
export class ClientesModule { }

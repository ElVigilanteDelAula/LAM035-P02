import { Component, OnInit } from '@angular/core';
import { Grupo, Cliente } from '../cliente.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes: Cliente[] = [

  ];
  constructor(private clientesService:ClientesService) { }

  ngOnInit(): void {
    this.clientes = this.clientesService.getCliente();
  }

}

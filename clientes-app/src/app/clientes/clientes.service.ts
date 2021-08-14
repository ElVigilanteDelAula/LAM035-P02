import { syntaxError } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {
  private clientes: Cliente[];
  private grupos: Grupo[];

  constructor() { 
    this.grupos = [
      {
      id: 0,
      sexo: 'Masculino'
      },
      {
      id: 1,
      sexo: 'Femenino'
      } 
    ];

    this.clientes = [];
  }

  getGrupos() {
    return this.grupos;
  }

  getCliente(){
    return this.clientes;
  }
  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  nuevoCliente(): Cliente{
    return{
      id: this.clientes.length,
      nombre: '',
      curp: '',
      direccion: '',
      sexo: 0
    };
  }
}

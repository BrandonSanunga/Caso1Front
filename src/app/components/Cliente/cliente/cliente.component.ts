import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/Cliente/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: any;

  constructor(
    public clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.clienteService.getAllClientes().subscribe(resp=>{
      this.clientes = resp;
      console.log(resp);
      
    },
    error=>{console.error(console.error)})
  }

}

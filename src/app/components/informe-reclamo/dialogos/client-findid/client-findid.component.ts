import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/modelos/clientes';

@Component({
  selector: 'app-client-findid',
  templateUrl: './client-findid.component.html',
  styleUrls: ['./client-findid.component.css']
})
export class ClientFindidComponent implements OnInit {
  cliente:Clientes=new Clientes();
  constructor() { }

  ngOnInit(): void {
  }

}

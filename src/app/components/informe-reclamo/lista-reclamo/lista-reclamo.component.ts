import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformeReclamo } from 'src/app/modelos/iforme-reclamo';
import { InformeReclamoTallerService } from 'src/app/services/informeReclamo/informe-reclamo-services.service';

@Component({
  selector: 'app-lista-reclamo',
  templateUrl: './lista-reclamo.component.html',
  styleUrls: ['./lista-reclamo.component.css']
})
export class ListaReclamoComponent implements OnInit {
   listaInforme:any=[];
   informeReclamo:InformeReclamo = new InformeReclamo();
  constructor(private root:Router, private inforReclamoService:InformeReclamoTallerService) { }

  ngOnInit(): void {
    this.CargarTable();
    console.log(this.listaInforme)
  }

  CargarTable(){
    this.inforReclamoService.getAllInforme().subscribe(data => {
       for(let i of data){
        this.listaInforme.push(i);
       }
    });
    console.log(this.listaInforme);
  }

Ver(cedula:any,id:any){
  localStorage.setItem("cedulaCliente",cedula);
  localStorage.setItem("idinforme",id);
  var chasis="1"
  localStorage.setItem("chasis",chasis);
  this.root.navigate(['informe-reclamo']);
}

}

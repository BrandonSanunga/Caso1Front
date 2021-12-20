import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformeReclamo } from 'src/app/modelos/iforme-reclamo';
import { InformeReclamoTallerService } from 'src/app/services/informeReclamo/informe-reclamo-services.service';
import { ReclamoGarantiaService } from 'src/app/services/ReclamoGarantia/reclamo-garantia.service';

@Component({
  selector: 'app-lista-reclamo',
  templateUrl: './lista-reclamo.component.html',
  styleUrls: ['./lista-reclamo.component.css']
})
export class ListaReclamoComponent implements OnInit {
   listaInforme:any=[];
   estado:any;
   chasis:any;
   informeReclamo:InformeReclamo = new InformeReclamo();
  constructor(private root:Router, private inforReclamoService:InformeReclamoTallerService, private reclamoservice:ReclamoGarantiaService) { }

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
  this.reclamoservice.getfindByid(id).subscribe(data=>{
    console.log(data)
    this.estado = true
    this.chasis=data.fk_id_solicitud.fk_chasis_vehiculo.chasis
    localStorage.setItem("estado",this.estado)
   localStorage.setItem("chasis",this.chasis);
  localStorage.setItem("cedulaCliente",cedula);
    localStorage.setItem("idinforme",id);
  this.root.navigate(['informe-reclamo']);
  })
}

abrirInspeccion(id:any, idinspeccion:any){
  localStorage.setItem("idInformeReclamo",idinspeccion)
  console.log(idinspeccion)
  localStorage.setItem("idvehiculo",id);
  this.root.navigate(["/inspeccion"])
}

}

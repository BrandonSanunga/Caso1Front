import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/modelos/clientes';
import { InformeReclamo } from 'src/app/modelos/iforme-reclamo';
import { InspeCavecera } from 'src/app/modelos/inpeccion/inspe-cavecera';
import { InspeCuerpo } from 'src/app/modelos/inpeccion/inspe-cuerpo';
import { InformeReclamoTallerService } from 'src/app/services/informeReclamo/informe-reclamo-services.service';
import { InspeCaveTallerService } from 'src/app/services/inspeccion/inspe-cave-services.service';
import { InspeCuerpoServiceService } from 'src/app/services/inspeccion/inspe-cuerpo-service.service';
import { ReclamoGarantiaService } from 'src/app/services/ReclamoGarantia/reclamo-garantia.service';

@Component({
  selector: 'app-inspeccion',
  templateUrl: './inspeccion.component.html',
  styleUrls: ['./inspeccion.component.css']
})
export class InspeccionComponent implements OnInit {
   reclamo:any
   chasisve:any
   marcave:any;
   modelo:any;
   idvehiculo:any;
   info:any;

   inspeccionCuerpos:InspeCuerpo=new InspeCuerpo();
   inspeccionCave:InspeCavecera=new InspeCavecera();
   informeReclamo:InformeReclamo=new InformeReclamo();
   cliente:Clientes=new Clientes();
  constructor(private informeService:InformeReclamoTallerService,private root:Router,private reclamogetid:ReclamoGarantiaService, private inspeServiceCuerpo:InspeCuerpoServiceService, private inspeServiceCave:InspeCaveTallerService) { }

  ngOnInit(): void {
    this.vervehiculo()
    this.cargaInspeccion()
  }

  cargaInspeccion(){
    var id=localStorage.getItem("idInformeReclamo")
    this.inspeServiceCave.all().subscribe(data=>{
       if(data!=null){
      for(let i of data){
        if(i.informeReclamo.idinformeRecha==id){
          this.inspeccionCave=i
          this.inspeServiceCuerpo.all().subscribe(data=>{
            for(let j of data){
              if(j.inspeCavecera.idinspeccionCavecera==this.inspeccionCave.idinspeccionCavecera){
                this.inspeccionCuerpos=j
                console.log("inspeccion caraga")
                console.log(this.inspeccionCuerpos)
              }
            }
          })
        }else{
          this.optenerInforme()
        }
      }
    }else{
      this.optenerInforme()
    }
    if(data!=null){
      if(this.inspeccionCuerpos!=null)
          {
            document.getElementById("btnGuardar")?.remove()
          }
    }else{
          document.getElementById("idbtnActualizar")?.remove()
    }
    })
  }

  vervehiculo(){
    this.idvehiculo=localStorage.getItem("idvehiculo");
    this.reclamogetid.getfindByid(this.idvehiculo).subscribe(data=>{
      this.reclamo=data;
      this.chasisve=data.fk_id_solicitud.fk_chasis_vehiculo.chasis;
      this.marcave=data.fk_id_solicitud.fk_chasis_vehiculo.vehiculoCatalogo.diseno.marca;
      this.modelo=data.fk_id_solicitud.fk_chasis_vehiculo.vehiculoCatalogo.diseno.modelo;
      console.log(data)
    })
  }
  optenerInforme(){
    var id=localStorage.getItem("idInformeReclamo")
    this.informeService.getById(id).subscribe(data=>{
      this.cliente.cedulaClient=data.client.cedulaClient;
      this.cliente.celularClient=data.client.celularClient;
      this.cliente.direccionClient=data.client.direccionClient;
      this.cliente.emailClient=data.client.emailClient;
      this.cliente.nombresClient=data.client.nombresClient;
      this.cliente.passwordClient=data.client.passwordClient;
      this.informeReclamo=data
      this.informeReclamo.client=this.cliente
      this.inspeccionCave.informeReclamo=this.informeReclamo;
    })
  }
  guardarCavecera(){
    var fecha=new Date()
    this.inspeccionCave.fecha_insepeccion=fecha;
    this.inspeServiceCave.guardar(this.inspeccionCave).subscribe(data=>{
      var id=localStorage.getItem("idInformeReclamo")
    this.inspeServiceCave.all().subscribe(data=>{
      for(let i of data){
        console.log(i.informeReclamo.idinformeRecha)
         if(i.informeReclamo.idinformeRecha==id){
           console.log("encontrado"+id)
           console.log(i)
           i.informeReclamo=this.informeReclamo
           this.inspeccionCuerpos.inspeCavecera=i
           this.inspeServiceCuerpo.guardar(this.inspeccionCuerpos).subscribe(data=>{
            this.root.navigate(["/lista-reclamo"])
            console.log(data)
          })
         }
      }
    })
    })
    }
    actulizardetalle(){
      console.log(this.inspeccionCuerpos)
      this.inspeServiceCuerpo.update(this.inspeccionCuerpos.idinspeCuerpo,this.inspeccionCuerpos).subscribe(data=>{
        console.log(data)
      })
    }
  guardar(){
    this.guardarCavecera()
  }
  cancelar(){
    this.root.navigate(["/lista-reclamo"])
  }

}

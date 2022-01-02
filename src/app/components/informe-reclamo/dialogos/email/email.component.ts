import { Component, OnInit } from '@angular/core';
import { InformeReclamoTallerService } from 'src/app/services/informeReclamo/informe-reclamo-services.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  tipoCorreo:any;
 segundocoore:any="andresguamanmr189@gmail.com"
  correo:any;
  chasis:any;
  nombreCliente:any;

  encavezado:any;
  descripcion:any;
  constructor(private informeRelcamoService:InformeReclamoTallerService) { }

  ngOnInit(): void {
  this.correo=localStorage.getItem("email");
  this.chasis=localStorage.getItem("emailvehiculo");
  this.nombreCliente=localStorage.getItem("emailSaludo");
  }
  enviarCorreo(){
    if(this.segundocoore == null || this.segundocoore==""){
      this.informeRelcamoService.enviarCorreo(this.encavezado,this.descripcion,this.correo).subscribe(data=>{
        Swal.fire("CORREO ENVIADO", "El correo se envió con exito!", "success");
        //alert("Mensaje enviado")
        this.encavezado=""
        this.descripcion=""
       })
    }else{
      this.informeRelcamoService.enviarCorreo(this.encavezado,this.descripcion,this.segundocoore).subscribe(data=>{
        this.informeRelcamoService.enviarCorreo(this.encavezado,this.descripcion,this.correo).subscribe(data=>{
          Swal.fire("CORREO ENVIADO", "El correo se envió con exito!", "success");
          //alert("Mensaje enviado")
          this.encavezado=""
          this.descripcion=""
         })
       })
    }
  }
  cargartipocorreo(){
    if(this.tipoCorreo=="Aceptado"){
      this.encavezado="Solicitud Aceptada"
      this.descripcion="Hola "+this.nombreCliente+" la solicitud enviada por el vehiculo con el numero de chasis "+this.chasis+" fue aceptada";
    }else if(this.tipoCorreo=="Rechazado"){
      this.encavezado="Solicitud Rechazada"
      this.descripcion="Hola "+this.nombreCliente+" la solicitud enviada por el vehiculo con el numero de chasis "+this.chasis+" fue rechazada";
    }
  }
}

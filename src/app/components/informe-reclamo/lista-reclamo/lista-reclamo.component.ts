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
   aceptado:any="ACEPTADO"
   rechazado:any="RECHAZADO"
   informeReclamo:InformeReclamo = new InformeReclamo();
   comprobartabla:any=[]

  cedulaCliente:any
  busquedacliente:any=[]
  respuestacliete:any

  tipoinformecavehiculo:any
  marcavehiculo:any
  modelocavehiculo:any
  anofabricavehiculo:any
  paiscavehiculo:any
  colorcavehiculo:any

  mayorcantida:any;
  menorcantidad:any;
  fechainicio:any;
  fechafin:any;

  cantidad:any=[]
  temporal:any=[]

  arr:any=[];
  filtrocantida:any=[]
  constructor(private root:Router, private inforReclamoService:InformeReclamoTallerService, private reclamoservice:ReclamoGarantiaService) { }

  ngOnInit(): void {
    this.CargarTable();
    console.log(this.listaInforme)
  }
  filtroreclamo(){
    let mayor=[0]
    this.arr=[]
    this.filtrocantida=[]
    let duplicados = [];
    let cantidad = [];
    let can=0;
    let dater="";
    for(let i of this.listaInforme){
      this.arr.push([i.idinformeRecha,i.reclamogarantia.fk_id_solicitud.fk_chasis_vehiculo.vehiculoCatalogo.diseno.marca,i.reclamogarantia.fk_id_solicitud.fk_chasis_vehiculo.vehiculoCatalogo.diseno.modelo,i.tipoInforme,i.respuestaCliente])
}
var sorted = this.arr.sort();
for (let j = 0; j < sorted.length; j++) {
  if (sorted[j + 1] != sorted[j]) {
     dater=sorted[j];
     duplicados.push(dater)
  }
}
for(let a = 0; a < duplicados.length; a++){
  for(let s = -1; s < this.arr.length; s++){
    if(dater==duplicados[a]){
      can=can+1
      if(duplicados[a]==this.arr[s]){
        var dat = duplicados[a]
        const result = this.listaInforme.filter((listaInform: any)=>
        listaInform.reclamogarantia.fk_id_solicitud.fk_chasis_vehiculo.vehiculoCatalogo.diseno.marca == dat[1] &&
        listaInform.reclamogarantia.fk_id_solicitud.fk_chasis_vehiculo.vehiculoCatalogo.diseno.modelo == dat[2] &&
        listaInform.tipoInforme == "Aceptado" && listaInform.respuestaCliente == "ACEPTADO" );
        if(result.length>1){
          cantidad.push([this.arr[s],result.length]);
        }
      }
    }else{
      can=0
    }
    dater=duplicados[a];
  }
}
const dataArr = new Set(cantidad);
let result = [...dataArr];
for(let i of result){
    if(i[1]>mayor || i[1]==mayor){
     mayor=i[1]
     for(let h of this.listaInforme){
      var datais=h.idinformeRecha
      var data2id=i[0][0]
      if(data2id==datais){
         this.filtrocantida.push(h)
      }
   }
    }
}
this.listaInforme=[]
  this.listaInforme=this.filtrocantida
  var cantidadvehiculo=this.listaInforme.length
  var marcvehiculo=this.listaInforme.reclamogarantia.fk_id_solicitud.fk_chasis_vehiculo.vehiculoCatalogo.diseno.marca
  this.mayorcantida=marcvehiculo
}
filtroFecha(){
  if(this.comprobartabla.size>this.listaInforme.size){
    this.CargarTable()
  }
  if(this.tipoinformecavehiculo == null && this.marcavehiculo==null && this.modelocavehiculo==null && this.anofabricavehiculo==null && this.paiscavehiculo==null && this.colorcavehiculo==null){
    this.CargarTable()
  }
}
filtrovehiculo(){
if(this.comprobartabla.size>this.listaInforme.size){
    this.CargarTable()
  }
  if(this.tipoinformecavehiculo == null && this.marcavehiculo==null && this.modelocavehiculo==null && this.anofabricavehiculo==null && this.paiscavehiculo==null && this.colorcavehiculo==null){
    this.CargarTable()
  }else if(this.tipoinformecavehiculo != null && this.marcavehiculo==null && this.modelocavehiculo==null && this.anofabricavehiculo==null && this.paiscavehiculo==null && this.colorcavehiculo==null){
    var verprim = this.listaInforme
    this.listaInforme=[]
    for(let h of verprim){
      var lispinf=h.tipoInforme
      if(lispinf==this.tipoinformecavehiculo){
        this.listaInforme.push(h)
      }
    }
  }else if(this.tipoinformecavehiculo == null && this.marcavehiculo!=null && this.modelocavehiculo==null && this.anofabricavehiculo==null && this.paiscavehiculo==null && this.colorcavehiculo==null){
    var verseg = this.listaInforme
    this.listaInforme=[]
    for(let h of verseg){
      var lismarca=h.reclamogarantia.fk_id_solicitud.fk_chasis_vehiculo.vehiculoCatalogo.diseno.marca
      if(lismarca==this.marcavehiculo){
        this.listaInforme.push(h)
      }
    }
  }else if(this.tipoinformecavehiculo == null && this.marcavehiculo==null && this.modelocavehiculo!=null && this.anofabricavehiculo==null && this.paiscavehiculo==null && this.colorcavehiculo==null){
    var verter = this.listaInforme
    this.listaInforme=[]
    for(let h of verter){
      var lismodel=h.reclamogarantia.fk_id_solicitud.fk_chasis_vehiculo.vehiculoCatalogo.diseno.modelo
      if(lismodel==this.modelocavehiculo){
        this.listaInforme.push(h)
      }
    }
  }else if(this.tipoinformecavehiculo == null && this.marcavehiculo==null && this.modelocavehiculo==null && this.anofabricavehiculo!=null && this.paiscavehiculo==null && this.colorcavehiculo==null){
    var vercuac = this.listaInforme
    this.listaInforme=[]
    for(let h of vercuac){
      var lisfabr=h.reclamogarantia.fk_id_solicitud.fk_chasis_vehiculo.vehiculoCatalogo.year_vehiculo
      if(lisfabr==this.anofabricavehiculo){
        this.listaInforme.push(h)
      }
    }
  }else if(this.tipoinformecavehiculo == null && this.marcavehiculo==null && this.modelocavehiculo==null && this.anofabricavehiculo==null && this.paiscavehiculo!=null && this.colorcavehiculo==null){
    var verquic = this.listaInforme
    this.listaInforme=[]
    for(let h of verquic){
      var lispais=h.reclamogarantia.fk_id_solicitud.fk_chasis_vehiculo.pais.nombre
      if(lispais==this.paiscavehiculo){
        this.listaInforme.push(h)
      }
    }
  }else if(this.tipoinformecavehiculo == null && this.marcavehiculo==null && this.modelocavehiculo==null && this.anofabricavehiculo==null && this.paiscavehiculo==null && this.colorcavehiculo!=null){
    var versex = this.listaInforme
    this.listaInforme=[]
    for(let h of versex){
      var liscolor=h.reclamogarantia.fk_id_solicitud.fk_chasis_vehiculo.color
      if(liscolor==this.colorcavehiculo){
        this.listaInforme.push(h)
      }
    }
  }else if(this.tipoinformecavehiculo != null || this.marcavehiculo!=null || this.modelocavehiculo!=null || this.anofabricavehiculo!=null || this.paiscavehiculo!=null || this.colorcavehiculo!=null){
    var primer = this.listaInforme
    this.listaInforme=[]
      const result = primer.filter((listaInform: any)=>listaInform.tipoInforme === this.tipoinformecavehiculo &&
                                                        listaInform.reclamogarantia.fk_id_solicitud.fk_chasis_vehiculo.vehiculoCatalogo.diseno.marca == this.marcavehiculo ||
                                                        listaInform.reclamogarantia.fk_id_solicitud.fk_chasis_vehiculo.vehiculoCatalogo.diseno.modelo == this.modelocavehiculo ||
                                                        listaInform.reclamogarantia.fk_id_solicitud.fk_chasis_vehiculo.vehiculoCatalogo.year_vehiculo == this.anofabricavehiculo ||
                                                        listaInform.reclamogarantia.fk_id_solicitud.fk_chasis_vehiculo.pais.nombre == this.paiscavehiculo ||
                                                        listaInform.reclamogarantia.fk_id_solicitud.fk_chasis_vehiculo.color == this.colorcavehiculo)

      console.log(result);
        this.listaInforme=[]
        for(let i of result){
          this.listaInforme.push(i)
          console.log(this.listaInforme)
        }
  }
  this.tipoinformecavehiculo=null
  this.marcavehiculo=null
  this.modelocavehiculo=null
  this.anofabricavehiculo=null
  this.paiscavehiculo=null
  this.colorcavehiculo=null

}

  CargarTable(){
    this.listaInforme=[]
    this.inforReclamoService.getAllInforme().subscribe(data => {
       for(let i of data){
        this.listaInforme.push(i);
        this.comprobartabla.push(i)
       }
    });
    console.log(this.listaInforme);
  }

Ver(cedula:any,id:any, idverifi:any){
  this.reclamoservice.getfindByid(id).subscribe(data=>{
    console.log(data)
    this.estado = true
    localStorage.setItem("idverifi",idverifi)
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
aceptarCliente(id:any){
this.inforReclamoService.updateAceptar(id).subscribe(data=>{
 console.log(data)
 this.CargarTable()
})

}
canceladoCliente(id:any){
this.inforReclamoService.updateCancelar(id).subscribe(data=>{
  console.log(data)
  this.CargarTable()
})
}
filtroCliente(){
  if(this.comprobartabla.size>this.listaInforme.size){
    this.CargarTable()
  }
  if(this.cedulaCliente==null && this.respuestacliete==null){
    this.CargarTable()
  }else if(this.cedulaCliente!=null && this.respuestacliete!=null){
    var primer = this.listaInforme
    this.listaInforme=[]
    for(let h of primer){
      var cedu=h.client.cedulaClient
      if(cedu==this.cedulaCliente){
        this.busquedacliente.push(h)
        for(let n of this.busquedacliente){
          var rep = n.respuestaCliente
         if(rep==this.respuestacliete){
            this.listaInforme.push(n)
            const dataArr = new Set(this.listaInforme);
            let result = [...dataArr];
            this.listaInforme=result
          }

        }
      }
    }
  }else if(this.cedulaCliente!=null && this.respuestacliete==null){
    var segundabus = this.listaInforme
    this.listaInforme=[]
    for(let h of segundabus){
      var cedu=h.client.cedulaClient
      if(cedu==this.cedulaCliente){
        this.listaInforme.push(h)
        console.log(this.listaInforme)
      }
    }
  }else if(this.cedulaCliente==null && this.respuestacliete!=null){
    var tergundabus = this.listaInforme
    this.listaInforme=[]
    for(let h of tergundabus){
      var resp=h.respuestaCliente
      if(resp==this.respuestacliete){
        this.listaInforme.push(h)
      }
    }
  }

  this.cedulaCliente=null
  this.respuestacliete=null
}
}

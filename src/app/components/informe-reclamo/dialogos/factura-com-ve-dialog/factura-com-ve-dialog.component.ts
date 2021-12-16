import { Component, OnInit } from '@angular/core';
import { InformeReclamoTallerService } from 'src/app/services/informeReclamo/informe-reclamo-services.service';

@Component({
  selector: 'app-factura-com-ve-dialog',
  templateUrl: './factura-com-ve-dialog.component.html',
  styleUrls: ['./factura-com-ve-dialog.component.css']
})
export class FacturaComVeDialogComponent implements OnInit {
  idfactura:any;
  detalleFactura:any=[];
  cliente:any;
  factura:any;
  constructor(private facturaservice:InformeReclamoTallerService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

cargarDatos(){
  this.idfactura = localStorage.getItem("factuDialog");
  this.facturaservice.optenerFactura().subscribe(data=>{
    for(let i of data){
      if(i.id==this.idfactura){
        this.factura=i;
        for(let j of i.detallesfacturas){
          this.detalleFactura.push(j)
        }
        this.cliente=i.cliente;
        console.log(this.factura)
      }
    }
  })

}

}

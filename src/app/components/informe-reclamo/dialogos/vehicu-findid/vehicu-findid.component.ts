import { Component, OnInit } from '@angular/core';
import { InformeReclamoTallerService } from 'src/app/services/informeReclamo/informe-reclamo-services.service';
import { VehiculoService } from 'src/app/services/Vehiculo/vehiculo.service';

@Component({
  selector: 'app-vehicu-findid',
  templateUrl: './vehicu-findid.component.html',
  styleUrls: ['./vehicu-findid.component.css']
})
export class VehicuFindidComponent implements OnInit {
   vehiculo:any;
  constructor(private informeVehiculoService:InformeReclamoTallerService) { }

  ngOnInit(): void {
    this.optenerVehiculo()
  }

  optenerVehiculo(){
    var id = localStorage.getItem("vehiculoDialog")
    this.informeVehiculoService.optenerVehiculoID(id).subscribe(data=>{
        console.log(data)
        this.vehiculo=data;
    })
  }
}

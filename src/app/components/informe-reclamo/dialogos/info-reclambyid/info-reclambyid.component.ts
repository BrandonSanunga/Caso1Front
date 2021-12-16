import { Component, OnInit } from '@angular/core';
import { ReclamoGarantiaService } from 'src/app/services/ReclamoGarantia/reclamo-garantia.service';

@Component({
  selector: 'app-info-reclambyid',
  templateUrl: './info-reclambyid.component.html',
  styleUrls: ['./info-reclambyid.component.css']
})
export class InfoReclambyidComponent implements OnInit {
  reclamo:any;
  constructor(private reclamoService:ReclamoGarantiaService) { }

  ngOnInit(): void {
  this.optenerReclamo();
  }
  optenerReclamo(){
   var id = localStorage.getItem("inforReclDialog");
    this.reclamoService.getfindByid(id).subscribe(data=>{
      this.reclamo=data;
    })
  }
}

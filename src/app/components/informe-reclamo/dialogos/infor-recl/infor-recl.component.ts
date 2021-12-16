import { Component, OnInit } from '@angular/core';
import { InformeReclamoTallerService } from 'src/app/services/informeReclamo/informe-reclamo-services.service';

@Component({
  selector: 'app-infor-recl',
  templateUrl: './infor-recl.component.html',
  styleUrls: ['./infor-recl.component.css']
})
export class InforReclComponent implements OnInit {

  garantia:any;
  constructor(private reclamoService:InformeReclamoTallerService) { }

  ngOnInit(): void {
    this.optenerGarantia()
  }

  optenerGarantia(){
    var id = localStorage.getItem("inforReclDialog")
    this.reclamoService.optenerGarantiaID(id).subscribe(data=>{
      this.garantia=data
    })
  }

}

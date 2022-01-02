import { Component, OnInit } from '@angular/core';
import { RepuestosService } from 'src/app/services/repuestos/repuestos.service';

@Component({
  selector: 'app-reporte-repuestos',
  templateUrl: './reporte-repuestos.component.html',
  styleUrls: ['./reporte-repuestos.component.css']
})
export class ReporteRepuestosComponent implements OnInit {
  reporte: any=[];

  constructor(private report:RepuestosService

  ) { }

  ngOnInit(): void {
    
  }

}

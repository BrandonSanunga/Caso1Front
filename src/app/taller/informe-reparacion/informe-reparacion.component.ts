import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-informe-reparacion',
  templateUrl: './informe-reparacion.component.html',
  styleUrls: ['./informe-reparacion.component.css'],
})
export class InformeReparacionComponent implements OnInit {
  public id: any = null;
  public orden: any = null;
  constructor(
    public ordenesService: ServicesService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.orden = await this.ordenesService.getOrdenById(this.id);
    console.log(this.orden);
  }

  async imprimirPantalla() {
    console.log('imprimir pantalla');
    window.print();
  }
}

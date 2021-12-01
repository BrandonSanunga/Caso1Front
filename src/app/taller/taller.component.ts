import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-taller',
  templateUrl: 'taller.component.html',
  styleUrls: ['./taller.component.css'],
})
export class TallerComponent implements OnInit {
  public ordenes: any[] = [];

  constructor(public ordenesService: ServicesService) {}

  async ngOnInit() {
    this.ordenes = await this.ordenesService.getOrdenes();
  }
}

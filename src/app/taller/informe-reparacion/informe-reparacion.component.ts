import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LabelValue, TallerService } from '../services.service';

@Component({
  selector: 'app-informe-reparacion',
  templateUrl: './informe-reparacion.component.html',
  styleUrls: ['./informe-reparacion.component.css'],
})
export class InformeReparacionComponent implements OnInit {
  public id: any = null;
  public orden: any = null;
  public repuestos: LabelValue[] = [];
  public mostrarDetalles = false;
  public detallesRepuestos: any[] = [];
  public repuestoSeleccionado: LabelValue | null = null;

  public solicitandoRepuesto = false;

  public idEliminando = null;
  public imprimiendoReporte: boolean = false;
  public enviandoReporte: boolean = false;

  constructor(
    public tallerService: TallerService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this.tallerService.getOrdenById(this.id).then((res) => {
      this.orden = res;
    });

    this.tallerService.getRepuestos().then((res) => {
      this.repuestos = res;
    });
    this.consultarDetalleRepuestos();
  }

  consultarDetalleRepuestos() {
    this.tallerService.detalleRepuestos(this.id).then((res) => {
      this.detallesRepuestos = res;
    });
  }

  onClickDetalles() {
    this.mostrarDetalles = !this.mostrarDetalles;
  }
  changeEstado(evt: any) {
    const value = evt.target.value;
    const cambiarEstado = confirm('Esta seguro de cambiar el estado?');

    if (cambiarEstado) {
      this.tallerService.cambiarEstado(this.id, value);
    } else {
      if (this.tallerService.ESTADOS.EN_REVISION === value) {
        this.orden.estado = this.tallerService.ESTADOS.REVISADO;
      }
      if (this.tallerService.ESTADOS.REVISADO === value) {
        this.orden.estado = this.tallerService.ESTADOS.EN_REVISION;
      }
    }
  }

  async solicitarRepuesto() {
    if (this.repuestoSeleccionado) {
      try {
        this.solicitandoRepuesto = true;
        await this.tallerService.solicitarRepuesto(
          this.id,
          this.repuestoSeleccionado
        );
        this.consultarDetalleRepuestos();
        alert('Se ha solicitado el repuesto');
      } catch (error) {
        alert('Ha ocurrido un problema al solicitar el repuesto');
      }
      this.solicitandoRepuesto = false;
    }
  }

  async deleteDetalleItem(id: any) {
    this.idEliminando = id;
    try {
      const eliminar = confirm('Esta seguro de eliminar este registro?');
      if (eliminar) {
        await this.tallerService.deleteDetalleItem(id);
        this.consultarDetalleRepuestos();
      }
    } catch (error) {}
    this.idEliminando = null;
  }
  async imprimirReporte() {
    this.imprimiendoReporte = true;
    try {
      const res = await this.tallerService.imprimirInformeReparacion(this.id);
      const url = window.URL.createObjectURL(res);
      window.open(url);
    } catch (error) {
      console.log(error);
    }
    this.imprimiendoReporte = false;
  }
  async enviarReporte() {
    this.enviandoReporte = true;
    try {
      const res = await this.tallerService.enviarInformeReparacion(this.id);
      if (res.status === 'enviado') {
        alert(`Se ha notificado al cliente ${res?.email} correctamente`);
      } else {
        alert('Ha ocurrido un problema al enviar el correo');
      }
    } catch (error) {
      alert('Ha ocurrido un problema al enviar el correo');
    }
    this.enviandoReporte = false;
  }
}

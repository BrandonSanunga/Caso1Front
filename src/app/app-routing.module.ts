import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallefacliComponent } from './components/DetalleFacturaCli/detallefacli/detallefacli.component';
import { FacturacliComponent } from './components/FacturaCli/facturacli/facturacli.component';
import { InformeReclamoComponent } from './components/informe-reclamo/informe-reclamo.component';
import { InspeccionComponent } from './components/inspeccion/inspeccion.component';
import { OrdenReparacionComponent } from './components/orden-reparacion/orden-reparacion.component';
import { SoligarantiaComponent } from './components/SolicitudGarantia/soligarantia/soligarantia.component';
import { InformeReparacionComponent } from './taller/informe-reparacion/informe-reparacion.component';
import { RepuestoAgregadoComponent } from './taller/repuesto-agregado/repuesto-agregado.component';
import { SolicitudRepuestoComponent } from './taller/solicitud-repuesto/solicitud-repuesto.component';
import { TallerComponent } from './taller/taller.component';

const routes: Routes = [
  { path: 'informe-reclamo', component: InformeReclamoComponent },
  { path: 'inspeccion', component: InspeccionComponent },
  { path: 'orden-reparacion', component: OrdenReparacionComponent },
  { path: 'factura', component: FacturacliComponent },
  { path: 'detalle', component: DetallefacliComponent },
  { path: 'solgarantia', component: SoligarantiaComponent },
  {
    path: 'taller',
    component: TallerComponent,
  },
  {
    path: 'taller/orden/:id',
    component: InformeReparacionComponent,
  },
  {
    path: 'taller/repuestoAgregado',
    component: RepuestoAgregadoComponent,
  },
  {
    path: 'taller/solicitudRepuesto',
    component: SolicitudRepuestoComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaracteristicasVehiculoComponent } from './components/caracteristicas-vehiculo/caracteristicas-vehiculo.component';
import { DisenoVehiculoComponent } from './components/diseno-vehiculo/diseno-vehiculo.component';
import { VehiculoCatalogoComponent } from './components/vehiculo-catalogo/vehiculo-catalogo.component';
import { RepuestosComponent } from './components/repuestos/repuestos.component';
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
import { ReclamoGarantiaComponent } from './components/reclamo-garantia/reclamo-garantia.component';
import { ReclamoGarantiaFormComponent } from './components/reclamo-garantia/reclamo-garantia-form/reclamo-garantia-form.component';
import { ListaReclamoComponent } from './components/informe-reclamo/lista-reclamo/lista-reclamo.component';

const routes: Routes = [
  {path: 'repuestos',component: RepuestosComponent},
  {path: 'caracteristicas',component: CaracteristicasVehiculoComponent},
  {path: 'catalogo',component: VehiculoCatalogoComponent},
  { path: 'informe-reclamo', component: InformeReclamoComponent },
  { path: 'inspeccion', component: InspeccionComponent },
  { path: 'orden-reparacion', component: OrdenReparacionComponent },
  { path: 'factura', component: FacturacliComponent },
  { path: 'detalle', component: DetallefacliComponent },
  { path: 'solicitud/garantia', component: SoligarantiaComponent },
  {path: 'taller', component: TallerComponent },
  { path: 'taller/orden/:id', component: InformeReparacionComponent },
  { path: 'taller/repuestoAgregado', component: RepuestoAgregadoComponent },
  { path: 'taller/solicitudRepuesto', component: SolicitudRepuestoComponent },
  {path: 'diseno',component: DisenoVehiculoComponent},
  {path: 'reclamo/garantia',component: ReclamoGarantiaComponent},
  {path: 'form/garantia',component: ReclamoGarantiaFormComponent},
  { path: 'lista-reclamo', component: ListaReclamoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

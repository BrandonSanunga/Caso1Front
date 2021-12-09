import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaracteristicasVehiculoComponent } from './components/caracteristicas-vehiculo/caracteristicas-vehiculo.component';
import { DisenoVehiculoComponent } from './components/diseno-vehiculo/diseno-vehiculo.component';
import { VehiculoCatalogoComponent } from './components/vehiculo-catalogo/vehiculo-catalogo.component';
import { RepuestosComponent } from './components/repuestos/repuestos.component';
import { InformeReclamoComponent } from './components/informe-reclamo/informe-reclamo.component';
import { InspeccionComponent } from './components/inspeccion/inspeccion.component';
import { OrdenReparacionComponent } from './components/orden-reparacion/orden-reparacion.component';
import { FacturacliComponent } from './components/FacturaCli/facturacli/facturacli.component';
import { DetallefacliComponent } from './components/DetalleFacturaCli/detallefacli/detallefacli.component';

const routes: Routes = [
  {path: 'repuestos',component: RepuestosComponent},
  {path: 'caracteristicas',component: CaracteristicasVehiculoComponent},
  {path: 'catalogo',component: VehiculoCatalogoComponent},
  {path: 'diseno',component: DisenoVehiculoComponent},
  {path: 'informe-reclamo', component:InformeReclamoComponent},
  {path: 'inspeccion', component:InspeccionComponent},
  {path: 'orden-reparacion', component:OrdenReparacionComponent},
  {path: 'factura', component:FacturacliComponent},
  {path: 'detalle', component:DetallefacliComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

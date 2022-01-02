import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CaracteristicasVehiculoComponent } from "./components/caracteristicas-vehiculo/caracteristicas-vehiculo.component";
import { DisenoVehiculoComponent } from "./components/diseno-vehiculo/diseno-vehiculo.component";
import { VehiculoCatalogoComponent } from "./components/vehiculo-catalogo/vehiculo-catalogo.component";
import { RepuestosComponent } from "./components/repuestos/repuestos.component";
import { DetallefacliComponent } from "./components/DetalleFacturaCli/detallefacli/detallefacli.component";
import { FacturacliComponent } from "./components/FacturaCli/facturacli/facturacli.component";
import { InformeReclamoComponent } from "./components/informe-reclamo/informe-reclamo.component";
import { InspeccionComponent } from "./components/inspeccion/inspeccion.component";
import { OrdenReparacionComponent } from "./components/orden-reparacion/orden-reparacion.component";
import { SoligarantiaComponent } from "./components/SolicitudGarantia/soligarantia/soligarantia.component";
import { InformeReparacionComponent } from "./taller/informe-reparacion/informe-reparacion.component";
import { RepuestoAgregadoComponent } from "./taller/repuesto-agregado/repuesto-agregado.component";
import { SolicitudRepuestoComponent } from "./taller/solicitud-repuesto/solicitud-repuesto.component";
import { TallerComponent } from "./taller/taller.component";
import { ReclamoGarantiaComponent } from "./components/reclamo-garantia/reclamo-garantia.component";
import { ReclamoGarantiaFormComponent } from "./components/reclamo-garantia/reclamo-garantia-form/reclamo-garantia-form.component";
import { ListaReclamoComponent } from "./components/informe-reclamo/lista-reclamo/lista-reclamo.component";
import { GarantiaVehiculoComponent } from "./components/garantia-vehiculo/garantia-vehiculo.component";
import { VehiculoComponent } from "./components/vehiculo/vehiculo.component";
import { InformeConcecionariaService } from "./services/InformeConcecionaria/informe-concecionaria.service";
import { InformeConcecionariaComponent } from "./components/informe-concecionaria/informe-concecionaria.component";
import { VehiculoCatalogoFormComponent } from "./components/vehiculo-catalogo/vehiculo-catalogo-form/vehiculo-catalogo-form.component";
import { FormVehiculoComponent } from "./components/vehiculo/form-vehiculo/form-vehiculo.component";
import { ListaEntregarRepuestosComponent } from "./components/lista-entregar-repuestos/lista-entregar-repuestos.component";
import { AddCotizacionComponent } from "./components/cotizacion/add-cotizacion/add-cotizacion.component";
import { ListCotizacionComponent } from "./components/cotizacion/list-cotizacion/list-cotizacion.component";
import { AuthGuard } from "./guards/auth.guard";
import { FacturaReparacionComponent } from "./components/factura-reparacion/factura-reparacion.component";
import { ReporteRepuestosComponent } from "./components/reporte-repuestos/reporte-repuestos.component";


const routes: Routes = [
  { path: "garantiaV", component: GarantiaVehiculoComponent,canActivate:[AuthGuard] },
  { path: "caracteristicas", component: CaracteristicasVehiculoComponent, canActivate:[AuthGuard] },
  { path: "catalogo", component: VehiculoCatalogoComponent },
  { path: "Vehiculo", component: VehiculoComponent,canActivate:[AuthGuard] },
  { path: "facturas", component: DetallefacliComponent,canActivate:[AuthGuard] },
  { path: "solicitud/garantia", component: SoligarantiaComponent,canActivate:[AuthGuard]},
  { path: "reclamo/garantia", component: ReclamoGarantiaComponent, canActivate:[AuthGuard]},
  { path: "lista-reclamo", component: ListaReclamoComponent,canActivate:[AuthGuard] },
  { path: "orden-reparacion", component: OrdenReparacionComponent,canActivate:[AuthGuard] },

  { path: "repuestos", component: RepuestosComponent, canActivate:[AuthGuard] },
  { path: "lista-reclamo", component: ListaReclamoComponent,canActivate:[AuthGuard] },
  { path: "inspeccion", component: InspeccionComponent,canActivate:[AuthGuard] },
  { path: "diseno", component: DisenoVehiculoComponent, canActivate:[AuthGuard] },
  { path: "cotizaciones", component: ListCotizacionComponent,canActivate:[AuthGuard] },
  { path: "informe-reclamo", component: InformeReclamoComponent ,canActivate:[AuthGuard]},
  { path: "factura", component: FacturacliComponent ,canActivate:[AuthGuard]},
  { path: "factura-reparacion", component: FacturaReparacionComponent,canActivate:[AuthGuard] },
  { path: "factura/:idc", component: FacturacliComponent,canActivate:[AuthGuard] },
  { path: "cotizacion", component: AddCotizacionComponent,canActivate:[AuthGuard] },
  { path: "cotizacion/:id", component: AddCotizacionComponent,canActivate:[AuthGuard] },
  { path: "taller", component: TallerComponent,canActivate:[AuthGuard] },
  { path: "taller/orden/:id", component: InformeReparacionComponent,canActivate:[AuthGuard] },
  { path: "taller/repuestoAgregado", component: RepuestoAgregadoComponent,canActivate:[AuthGuard] },
  { path: "taller/solicitudRepuesto", component: SolicitudRepuestoComponent,canActivate:[AuthGuard] },
  { path: "InformeConcesionaria", component: InformeConcecionariaComponent,canActivate:[AuthGuard] },
  { path: "form/garantia", component: ReclamoGarantiaFormComponent,canActivate:[AuthGuard] },
  { path: "reclamo-garantia", component: ReclamoGarantiaComponent,canActivate:[AuthGuard]},
  { path: "catalogo/admin", component: VehiculoCatalogoFormComponent, canActivate:[AuthGuard] },
  { path: "formVehiculo", component: FormVehiculoComponent },
  { path: "lista-entregar-repuestos",component: ListaEntregarRepuestosComponent},
  { path: "ReporteRep",component: ReporteRepuestosComponent},
  { path: "formVehiculo", component: FormVehiculoComponent,canActivate:[AuthGuard] },
  { path: "lista-entregar-repuestos",component: ListaEntregarRepuestosComponent,canActivate:[AuthGuard]},
  { path: "**", pathMatch: "full", redirectTo:"catalogo"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

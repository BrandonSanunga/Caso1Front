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
import { AgregarimagenComponent } from "./components/vehiculo-catalogo/vehiculo-catalogo-form/agregarimagen/agregarimagen.component";
import { FormVehiculoComponent } from "./components/vehiculo/form-vehiculo/form-vehiculo.component";
import { ListaEntregarRepuestosComponent } from "./components/lista-entregar-repuestos/lista-entregar-repuestos.component";
import { AddCotizacionComponent } from "./components/cotizacion/add-cotizacion/add-cotizacion.component";
import { ListCotizacionComponent } from "./components/cotizacion/list-cotizacion/list-cotizacion.component";

const routes: Routes = [
  { path: "repuestos", component: RepuestosComponent },
  { path: "caracteristicas", component: CaracteristicasVehiculoComponent },
  { path: "catalogo", component: VehiculoCatalogoComponent },
  { path: "informe-reclamo", component: InformeReclamoComponent },
  { path: "inspeccion", component: InspeccionComponent },
  { path: "orden-reparacion", component: OrdenReparacionComponent },
  { path: "factura", component: FacturacliComponent },
  { path: "factura/:idc", component: FacturacliComponent },
  { path: "facturas", component: DetallefacliComponent },
  { path: "cotizacion", component: AddCotizacionComponent },
  { path: "cotizacion/:id", component: AddCotizacionComponent },
  { path: "cotizaciones", component: ListCotizacionComponent },
  { path: "solicitud/garantia", component: SoligarantiaComponent },
  { path: "taller", component: TallerComponent },
  { path: "taller/orden/:id", component: InformeReparacionComponent },
  { path: "taller/repuestoAgregado", component: RepuestoAgregadoComponent },
  { path: "taller/solicitudRepuesto", component: SolicitudRepuestoComponent },
  { path: "diseno", component: DisenoVehiculoComponent },
  { path: "reclamo/garantia", component: ReclamoGarantiaComponent },
  { path: "lista-reclamo", component: ListaReclamoComponent },
  { path: "garantiaV", component: GarantiaVehiculoComponent },
  { path: "Vehiculo", component: VehiculoComponent },
  { path: "InformeConcesionaria", component: InformeConcecionariaComponent },
  { path: "form/garantia", component: ReclamoGarantiaFormComponent },
  { path: "lista-reclamo", component: ListaReclamoComponent },
  { path: "reclamo-garantia", component: ReclamoGarantiaComponent },
  { path: "catalogo/admin", component: VehiculoCatalogoFormComponent },
  { path: "imagenCatalogo", component: AgregarimagenComponent },
  { path: "formVehiculo", component: FormVehiculoComponent },
  {
    path: "lista-entregar-repuestos",
    component: ListaEntregarRepuestosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

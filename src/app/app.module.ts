import { AgregarimagenComponent } from "./components/vehiculo-catalogo/vehiculo-catalogo-form/agregarimagen/agregarimagen.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FacturacliComponent } from "./components/FacturaCli/facturacli/facturacli.component";
import { DetallefacliComponent } from "./components/DetalleFacturaCli/detallefacli/detallefacli.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RepuestosComponent } from "./components/repuestos/repuestos.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { CaracteristicasVehiculoComponent } from "./components/caracteristicas-vehiculo/caracteristicas-vehiculo.component";
import { DisenoVehiculoComponent } from "./components/diseno-vehiculo/diseno-vehiculo.component";
import { VehiculoCatalogoComponent } from "./components/vehiculo-catalogo/vehiculo-catalogo.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClienteComponent } from "./components/Cliente/cliente/cliente.component";
import { InformeReclamoComponent } from "./components/informe-reclamo/informe-reclamo.component";
import { InspeccionComponent } from "./components/inspeccion/inspeccion.component";
import { OrdenReparacionComponent } from "./components/orden-reparacion/orden-reparacion.component";
import { SoligarantiaComponent } from "./components/SolicitudGarantia/soligarantia/soligarantia.component";
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { InformeReparacionComponent } from "./taller/informe-reparacion/informe-reparacion.component";
import { RepuestoAgregadoComponent } from "./taller/repuesto-agregado/repuesto-agregado.component";
import { SolicitudRepuestoComponent } from "./taller/solicitud-repuesto/solicitud-repuesto.component";
import { TallerComponent } from "./taller/taller.component";
import { ReclamoGarantiaComponent } from "./components/reclamo-garantia/reclamo-garantia.component";
import { ListaReclamoComponent } from "./components/informe-reclamo/lista-reclamo/lista-reclamo.component";
import { GarantiaVehiculoComponent } from "./components/garantia-vehiculo/garantia-vehiculo.component";
import { VehiculoComponent } from "./components/vehiculo/vehiculo.component";
import { InformeConcecionariaComponent } from "./components/informe-concecionaria/informe-concecionaria.component";
import { ReclamoGarantiaFormComponent } from "./components/reclamo-garantia/reclamo-garantia-form/reclamo-garantia-form.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { InforReclComponent } from "./components/informe-reclamo/dialogos/infor-recl/infor-recl.component";
import { VehicuFindidComponent } from "./components/informe-reclamo/dialogos/vehicu-findid/vehicu-findid.component";
import { ClientFindidComponent } from "./components/informe-reclamo/dialogos/client-findid/client-findid.component";
import { InfoReclambyidComponent } from "./components/informe-reclamo/dialogos/info-reclambyid/info-reclambyid.component";
import { FacturaComVeDialogComponent } from "./components/informe-reclamo/dialogos/factura-com-ve-dialog/factura-com-ve-dialog.component";
import { VehiculoCatalogoFormComponent } from "./components/vehiculo-catalogo/vehiculo-catalogo-form/vehiculo-catalogo-form.component";
import { FormVehiculoComponent } from "./components/vehiculo/form-vehiculo/form-vehiculo.component";
import { FormGarantiaVehiculoComponent } from "./components/garantia-vehiculo/form-garantia-vehiculo/form-garantia-vehiculo.component";
import { FormInformeConecesionariaComponent } from "./components/informe-concecionaria/form-informe-conecesionaria/form-informe-conecesionaria.component";
import { ListaEntregarRepuestosComponent } from "./components/lista-entregar-repuestos/lista-entregar-repuestos.component";
import { AddCotizacionComponent } from "./components/cotizacion/add-cotizacion/add-cotizacion.component";
import { ListCotizacionComponent } from "./components/cotizacion/list-cotizacion/list-cotizacion.component";
import { NgSelectModule } from "@ng-select/ng-select";
@NgModule({
  declarations: [
    AppComponent,
    RepuestosComponent,
    CaracteristicasVehiculoComponent,
    DisenoVehiculoComponent,
    VehiculoCatalogoComponent,
    LoginComponent,
    TallerComponent,
    InformeReparacionComponent,
    SolicitudRepuestoComponent,
    RepuestoAgregadoComponent,
    NavbarComponent,
    InformeReclamoComponent,
    InspeccionComponent,
    OrdenReparacionComponent,
    ClienteComponent,
    SoligarantiaComponent,
    ReclamoGarantiaComponent,
    ReclamoGarantiaFormComponent,
    ListaReclamoComponent,
    GarantiaVehiculoComponent,
    VehiculoComponent,
    InformeConcecionariaComponent,
    InforReclComponent,
    VehicuFindidComponent,
    ClientFindidComponent,
    InfoReclambyidComponent,
    FacturaComVeDialogComponent,
    VehiculoCatalogoFormComponent,
    AgregarimagenComponent,
    FormVehiculoComponent,
    FormGarantiaVehiculoComponent,
    FormInformeConecesionariaComponent,
    FacturacliComponent,
    DetallefacliComponent,
    ListaEntregarRepuestosComponent,
    AddCotizacionComponent,
    ListCotizacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatAutocompleteModule,
    MatInputModule,
    NgSelectModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

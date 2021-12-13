
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RepuestosComponent } from './components/repuestos/repuestos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CaracteristicasVehiculoComponent } from './components/caracteristicas-vehiculo/caracteristicas-vehiculo.component';
import { DisenoVehiculoComponent } from './components/diseno-vehiculo/diseno-vehiculo.component';
import { VehiculoCatalogoComponent } from './components/vehiculo-catalogo/vehiculo-catalogo.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/Cliente/cliente/cliente.component';
import { InformeReclamoComponent } from './components/informe-reclamo/informe-reclamo.component';
import { InspeccionComponent } from './components/inspeccion/inspeccion.component';
import { OrdenReparacionComponent } from './components/orden-reparacion/orden-reparacion.component';
import { SoligarantiaComponent } from './components/SolicitudGarantia/soligarantia/soligarantia.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InformeReparacionComponent } from './taller/informe-reparacion/informe-reparacion.component';
import { RepuestoAgregadoComponent } from './taller/repuesto-agregado/repuesto-agregado.component';
import { SolicitudRepuestoComponent } from './taller/solicitud-repuesto/solicitud-repuesto.component';
import { TallerComponent } from './taller/taller.component';
import { ReclamoGarantiaComponent } from './components/reclamo-garantia/reclamo-garantia.component';
import { ReclamoGarantiaFormComponent } from './components/reclamo-garantia/reclamo-garantia-form/reclamo-garantia-form.component';
import {MatDialogModule} from '@angular/material/dialog';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

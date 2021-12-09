import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/Cliente/cliente/cliente.component';
import { DetallefacliComponent } from './components/DetalleFacturaCli/detallefacli/detallefacli.component';
import { FacturacliComponent } from './components/FacturaCli/facturacli/facturacli.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TallerComponent,
    InformeReparacionComponent,
    SolicitudRepuestoComponent,
    RepuestoAgregadoComponent,
    NavbarComponent,
    FacturacliComponent,
    DetallefacliComponent,
    InformeReclamoComponent,
    InspeccionComponent,
    OrdenReparacionComponent,
    ClienteComponent,
    SoligarantiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

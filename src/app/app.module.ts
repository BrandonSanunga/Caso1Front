import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepuestosComponent } from './components/repuestos/repuestos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CaracteristicasVehiculoComponent } from './components/caracteristicas-vehiculo/caracteristicas-vehiculo.component';
import { DisenoVehiculoComponent } from './components/diseno-vehiculo/diseno-vehiculo.component';
import { FacturacliComponent } from './components/FacturaCli/facturacli/facturacli.component';
import { DetallefacliComponent } from './components/DetalleFacturaCli/detallefacli/detallefacli.component';
import { VehiculoCatalogoComponent } from './components/vehiculo-catalogo/vehiculo-catalogo.component';
import { InformeReclamoComponent } from './components/informe-reclamo/informe-reclamo.component';
import { InspeccionComponent } from './components/inspeccion/inspeccion.component';
import { OrdenReparacionComponent } from './components/orden-reparacion/orden-reparacion.component';
import { ClienteComponent } from './components/Cliente/cliente/cliente.component'


@NgModule({
  declarations: [
    AppComponent,
    RepuestosComponent,
    CaracteristicasVehiculoComponent,
    DisenoVehiculoComponent,
    FacturacliComponent,
    DetallefacliComponent,
    VehiculoCatalogoComponent,
    InformeReclamoComponent,
    InspeccionComponent,
    OrdenReparacionComponent,
    ClienteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

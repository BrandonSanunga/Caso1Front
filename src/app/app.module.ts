import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TallerComponent } from './taller/taller.component';
import { InformeReparacionComponent } from './taller/informe-reparacion/informe-reparacion.component';
import { SolicitudRepuestoComponent } from './taller/solicitud-repuesto/solicitud-repuesto.component';
import { RepuestoAgregadoComponent } from './taller/repuesto-agregado/repuesto-agregado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TallerComponent,
    InformeReparacionComponent,
    SolicitudRepuestoComponent,
    RepuestoAgregadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

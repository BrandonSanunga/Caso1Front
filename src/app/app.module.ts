import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InformeReparacionComponent } from './taller/informe-reparacion/informe-reparacion.component';
import { RepuestoAgregadoComponent } from './taller/repuesto-agregado/repuesto-agregado.component';
import { SolicitudRepuestoComponent } from './taller/solicitud-repuesto/solicitud-repuesto.component';
import { TallerComponent } from './taller/taller.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TallerComponent,
    InformeReparacionComponent,
    SolicitudRepuestoComponent,
    RepuestoAgregadoComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

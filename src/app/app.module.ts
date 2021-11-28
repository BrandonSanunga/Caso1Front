import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TallerComponent } from './taller/taller.component';
import { InformeReparacionComponent } from './taller/informe-reparacion/informe-reparacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TallerComponent,
    InformeReparacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

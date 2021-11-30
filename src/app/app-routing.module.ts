import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformeReparacionComponent } from './taller/informe-reparacion/informe-reparacion.component';
import { RepuestoAgregadoComponent } from './taller/repuesto-agregado/repuesto-agregado.component';
import { SolicitudRepuestoComponent } from './taller/solicitud-repuesto/solicitud-repuesto.component';
import { TallerComponent } from './taller/taller.component';

const routes: Routes = [
  {
    path: '/taller',
    component: TallerComponent
  },
  {
    path: "/taller/informeReparacion",
    component: InformeReparacionComponent
  },
  {
    path: "/taller/repuestoAgregado",
    component: RepuestoAgregadoComponent
  },
  {
    path: "/taller/solicitudRepuesto",
    component: SolicitudRepuestoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

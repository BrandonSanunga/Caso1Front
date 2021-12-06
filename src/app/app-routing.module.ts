import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformeReclamoComponent } from './components/informe-reclamo/informe-reclamo.component';
import { InspeccionComponent } from './components/inspeccion/inspeccion.component';
import { OrdenReparacionComponent } from './components/orden-reparacion/orden-reparacion.component';

const routes: Routes = [
  {path: 'informe-reclamo', component:InformeReclamoComponent},
  {path: 'inspeccion', component:InspeccionComponent},
  {path: 'orden-reparacion', component:OrdenReparacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

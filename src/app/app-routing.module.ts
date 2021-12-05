import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaracteristicasVehiculoComponent } from './caracteristicas-vehiculo/caracteristicas-vehiculo.component';
import { DisenoVehiculoComponent } from './diseno-vehiculo/diseno-vehiculo.component';
import { RepuestosComponent } from './repuestos/repuestos.component';

const routes: Routes = [
  {path: 'repuestos',component: RepuestosComponent},
  {path: 'caracteristicas',component: CaracteristicasVehiculoComponent},
  {path: 'diseno',component: DisenoVehiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

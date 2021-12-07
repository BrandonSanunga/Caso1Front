import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaracteristicasVehiculoComponent } from './components/caracteristicas-vehiculo/caracteristicas-vehiculo.component';
import { DisenoVehiculoComponent } from './components/diseno-vehiculo/diseno-vehiculo.component';
import { VehiculoCatalogoComponent } from './components/vehiculo-catalogo/vehiculo-catalogo.component';
import { RepuestosComponent } from './components/repuestos/repuestos.component';

const routes: Routes = [
  {path: 'repuestos',component: RepuestosComponent},
  {path: 'caracteristicas',component: CaracteristicasVehiculoComponent},
  {path: 'catalogo',component: VehiculoCatalogoComponent},
  {path: 'diseno',component: DisenoVehiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

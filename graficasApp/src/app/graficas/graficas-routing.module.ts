import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { DonutComponent } from './pages/donut/donut.component';
import { GraficaBarraComponent } from './pages/grafica-barra/grafica-barra.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'barras', component: BarrasComponent },
      { path: 'barras-doble', component: BarrasDobleComponent },
      { path: 'donut', component: DonutComponent },
      { path: 'donut-http', component: DonutHttpComponent },
      { path: 'grafica-barra', component: GraficaBarraComponent },
      { path: '**', redirectTo: 'barras' }
    ]
  }
];
/*

*/
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }

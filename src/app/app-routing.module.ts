import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';
import { PorCapitalComponent } from './paises/pages/por-capital/por-capital.component';
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PorPaisComponent, pathMatch: 'full' },
  { path: 'region', component: PorRegionComponent },
  { path: 'pais', component: PorPaisComponent },
  { path: 'capital', component: PorCapitalComponent },
  { path: 'pais/:id', component: VerPaisComponent },
  { path: '**', redirectTo: 'pais' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

# 08AppPaises

## 1.- Crear los directorios 
    pasies/(Componentes, interfaces,pages y services)
    shared/(footer, sidebar)
 y los módulos paises.module y shared.module

## 2.- Crear las páginas del proyecto en paises/pages 
exportar los componentes en el modulo paises.module:

 exports:[
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ]

  
## 3.- Crear rutas

3.1.- src\app\app-routing.module.ts:

const routes: Routes = [
  { path: '', component: PorPaisComponent, pathMatch: 'full' },
  { path: 'region', component: PorRegionComponent },
  { path: 'pais', component: PorPaisComponent },
  { path: 'capital', component: PorCapitalComponent },
  { path: 'pais/:id', component: VerPaisComponent },
  { path: '**', redirectTo: '' }
];

3.2.
- montar componente sidebar
- Montar Componente para buscar por país
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

const routes: Routes = [
  { path: '', component: PorPaisComponent, pathMatch: 'full' },
  { path: 'region', component: PorRegionComponent },
  { path: 'pais', component: PorPaisComponent },
  { path: 'capital', component: PorCapitalComponent },
  { path: 'pais/:id', component: VerPaisComponent },
  { path: '**', redirectTo: '' }
];
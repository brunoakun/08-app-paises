import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'europe', 'oceania', 'asia'];
  regionActiva: string = '';

  constructor(public srvPais: PaisService) { }

  ngOnInit(): void {
    this.srvPais.error = false;
    this.srvPais.paises = [];
    this.srvPais.buscarPor = 'region';

  }

  buscar(region: string) {
    if (region == this.regionActiva) return;
    
    this.srvPais.cargando = true;
    this.regionActiva = region;
    this.srvPais.buscarPaises(region)
      .subscribe({
        next: (respuesta) => {
          console.log(respuesta);
          this.srvPais.paises = respuesta;
        },
        error: (err) => {
          this.srvPais.error = true;
          console.log("Error");
          console.info(err);
          this.srvPais.paises = [];
          this.srvPais.cargando = false;
        },
        complete: () => {
          console.log("Finalizado");
          this.srvPais.cargando = false;
        }
      })
  }



}


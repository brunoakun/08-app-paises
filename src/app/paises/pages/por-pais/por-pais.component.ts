import { IPais } from './../../interfaces/pais';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})

export class PorPaisComponent implements OnInit {
  public paises: IPais[] = [];
  public termino: string = '';
  public error: boolean = false;
  public cargando: boolean = false;

  constructor(private srvPais: PaisService) { }

  ngOnInit(): void {
  }

  buscar() {
    this.error = false;
    this.cargando = true;
    this.srvPais.buscarPais(this.termino)
      .subscribe((respuesta) => {
        console.log(respuesta);
        this.paises = respuesta;
      }, (err) => {
        this.error = true;
        console.log("Error");
        console.info(err);
        this.paises = [];
        this.cargando = false;
      }, () => {
        console.log("Finalizado");
        this.cargando = false;
      }
      );

    console.log("Esto sale antes...");
  }


  cambiaTermino() { 
    this.error = false;
  }

}

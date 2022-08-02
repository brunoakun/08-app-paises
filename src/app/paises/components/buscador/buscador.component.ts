import { PaisService } from './../../services/pais.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  constructor(public srvPais: PaisService) { } 
  public termino: string = ''; 

  ngOnInit(): void {
  }
  
  buscar() {
    this.srvPais.error = false;
    this.srvPais.cargando = true;
    this.srvPais.buscarPais(this.termino)
      .subscribe((respuesta) => {
        console.log(respuesta);
        this.srvPais.paises = respuesta;
      }, (err) => {
        this.srvPais.error = true;
        console.log("Error");
        console.info(err);
        this.srvPais.paises = [];
        this.srvPais.cargando = false;
      }, () => {
        console.log("Finalizado");
        this.srvPais.cargando = false;
      }
      );

    console.log("Esto sale antes...");
  }


  cambiaTermino() { 
    this.srvPais.error = false;
  }



}

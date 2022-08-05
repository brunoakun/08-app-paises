import { PaisService } from './../../services/pais.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  // para poder emitir el evento debouncer, decorador Output
  @Output() onDebouncer: EventEmitter<string> = new EventEmitter();

  //Evento debouncer que se emite cuando se deja de escribir en un input
  debouncer: Subject<string> = new Subject();

  constructor(public srvPais: PaisService) { }
  public termino: string = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))  // Emite tras 300 milisegundos despues de la última tecla pulsada
      .subscribe(valor => {
        console.log('debouncer', valor);
        this.buscar();    // Buscamos 
    })
  }

  teclaPresionada() {
    // Evento debouncer = se ha pulsado una tecla
    this.debouncer.next(this.termino);
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

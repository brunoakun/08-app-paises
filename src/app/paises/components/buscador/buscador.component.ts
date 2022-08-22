import { IPais } from './../../interfaces/pais';
import { PaisService } from './../../services/pais.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})

export class BuscadorComponent implements OnInit {
  // Decorador Input 'placeholder' lo recibimos desde el padre
  @Input() placeholder: string = 'Buscar...';

  // Decorador Input 'tipo' tipo de búsqueda a hacer, por defecto 'buscarPais'
  @Input() tipoDeBusqueda: string = 'buscarPais';

  // para poder emitir el evento debouncer, decorador Output
  @Output() onDebouncer: EventEmitter<string> = new EventEmitter();

  //Evento debouncer que se emite cuando se deja de escribir en un input
  debouncer: Subject<string> = new Subject();


  constructor(public srvPais: PaisService) { }
  public termino: string = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))  // Emite tras 300 milisegundos despues de la última tecla pulsada
      .subscribe(valor => {     // Nos suscribimos al emisor del debouncer
        console.log('debouncer', valor);
        this.buscar();    // Buscamos 
      })
  }

  teclaPresionada() {
    // Evento debouncer = se ha pulsado una tecla, actualizamos el termino emitir
    this.debouncer.next(this.termino);
  }

  buscar() {
    this.srvPais.error = false;
    this.srvPais.cargando = true;

    if (this.tipoDeBusqueda == 'buscarPaises') this.buscarPaises();
    if (this.tipoDeBusqueda == 'buscarPais') this.buscarPais();


    console.log("Esto sale antes...");
  }

  /*
    buscarPaises() {
      this.srvPais.buscarPaises(this.termino)
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
    }
  */


  buscarPaises() {
    this.srvPais.buscarPaises(this.termino)
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
          
          this.setHistorico();
        }
      })
  }


  buscarPais() {
    this.srvPais.buscarPaisPorCod(this.termino)
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
  }


  cambiaTermino() {
    // El string a buscar ha cambiado
    this.srvPais.error = false;
  }


  setHistorico() {
    this.srvPais.paises.forEach(pais => {
      if (this.srvPais.paisesHistorico.filter(e => e.name.common === pais.name.common).length == 0) {
         this.srvPais.paisesHistorico.push(pais)
      }
    });

    return;
  }


}

import { IPais } from './../../interfaces/pais';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap ,tap} from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss']
})
export class VerPaisComponent implements OnInit {
  codigo: string = '';
  pais!: IPais;

  // inyectamos la ruta activa, que es un observable
  constructor(
    public srvPais: PaisService,
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.srvPais.error = false;
    this.srvPais.paises = [];

    /*
     // Nos suscribimos a cambios en los parámetros de la ruta activa, para capturarlos si los parámetros cambian 
     this.rutaActiva.params
       .subscribe(params => {
         this.codigo = params['id'];
         console.log('codigo: ', this.codigo);
 
       // Nos suscribimos al resultado del hhtpClient que devuelve el servicio
         this.srvPais.buscarPaisPorCod(this.codigo)
           .subscribe(pais => {
             console.log(pais);
           })
       })
 
     */

    // en vez de usar 2 observables, podemos utilizar el método de rjx 'switchmap()'

    this.rutaActiva.params
      .pipe(
        switchMap((param) => this.srvPais.buscarPaisPorCod(param['id'])),
        tap(resp =>console.log(resp))
      )
      .subscribe(pais => this.pais = pais[0])


  }

}

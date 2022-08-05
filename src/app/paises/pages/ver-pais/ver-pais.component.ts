import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss']
})
export class VerPaisComponent implements OnInit {
  codigo: string = '';

  // inyectamos la ruta activa, que es un observable
  constructor(
    public srvPaises: PaisService,
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Nos suscribimos a cambios en los parámetros de la ruta activa, para capturarlos si los parámetros cambian 
    this.rutaActiva.params
      .subscribe(params => {
        this.codigo = params['id'];
        console.log('codigo: ', this.codigo);
        this.srvPaises.buscarPaisPorCod(this.codigo)
          .subscribe(pais => {
            console.log(pais);
          })
      })
  }

}

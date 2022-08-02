import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  constructor(private srvPais: PaisService) { }

  ngOnInit(): void {
  }

  buscar() {
    this.srvPais.buscarPais(this.termino).subscribe((respuesta:any) => {
      console.log(respuesta);
    });
  }

  

}

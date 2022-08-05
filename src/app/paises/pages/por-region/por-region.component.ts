import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent implements OnInit {

  constructor(public srvPais: PaisService) { }

  ngOnInit(): void {
    this.srvPais.error = false;
    this.srvPais.paises = [];
    this.srvPais.buscarPor = 'region';
  }

}

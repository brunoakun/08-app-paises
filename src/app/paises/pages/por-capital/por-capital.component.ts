import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent implements OnInit {

  constructor(public srvPais: PaisService) { }

  ngOnInit(): void {
    this.srvPais.paises = [];
    this.srvPais.buscarPor = 'capital';
  }

}

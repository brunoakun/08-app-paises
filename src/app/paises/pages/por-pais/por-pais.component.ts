import { PaisService } from './../../services/pais.service';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})

export class PorPaisComponent implements OnInit {

  constructor(public srvPais: PaisService) { }
  ngOnInit(): void {
  }


}

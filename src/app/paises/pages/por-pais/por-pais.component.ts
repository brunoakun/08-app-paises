import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.termino);
  }

}

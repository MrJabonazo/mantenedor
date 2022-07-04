import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Selector } from '../../interfaces/buscador.interfaces';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  selectedValued1 = new FormControl();
  selectedValued2 = new FormControl();
  selectedValued3 = new FormControl();
  selectedValued4 = new FormControl();

  options: Selector[] = [
    {value: '0', viewValue: 'Option 1'},
    {value: '1', viewValue: 'Option 2'},
    {value: '2', viewValue: 'Option 3'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

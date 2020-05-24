import { Component, OnInit, Input } from '@angular/core';
import {Drink} from '../../models/drink';

@Component({
  selector: 'app-coctail-item',
  templateUrl: './coctail-item.component.html',
  styleUrls: ['./coctail-item.component.css']
})
export class CoctailItemComponent implements OnInit {
@Input() item:Drink;
  constructor() { }

  ngOnInit(): void {
  }

}

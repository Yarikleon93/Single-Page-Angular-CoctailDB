import { Component, OnInit, Input } from '@angular/core';
import {DrinksCollection} from '../../models/drinks-collection';
import {CoctailServiceService} from '../../service/coctail-service.service'

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  drinks:DrinksCollection;
  @Input() filter:string;

  constructor(private coctailservice: CoctailServiceService) { }

  ngOnInit(): void {
    this.coctailservice.getDrinks(this.filter).subscribe(data => this.drinks = data);
  }

}

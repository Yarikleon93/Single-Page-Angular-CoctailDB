import { Component, OnInit } from '@angular/core';
import {CoctailServiceService} from './service/coctail-service.service'
import {FilterCollection} from './models/filter-collection'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selectedFilters:string[] = [];
  constructor(private coctailservice: CoctailServiceService) {}
  title = 'CocktailDB';
  filter:FilterCollection;
  ngOnInit() {
    this.coctailservice.getFilters().subscribe(data => {
      this.filter = data;
    });
  }
  filterDrinks(filters:string[]){
    this.selectedFilters = filters;
  }
}


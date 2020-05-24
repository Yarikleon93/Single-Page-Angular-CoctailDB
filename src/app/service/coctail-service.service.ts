import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {FilterCollection} from '../models/filter-collection';
import {DrinksCollection} from '../models/drinks-collection';
@Injectable({
  providedIn: 'root'
})
export class CoctailServiceService {
  apiFilter = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  apiDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php';

  constructor(private http: HttpClient) { }
  getFilters(){
    return this.http.get<FilterCollection>(this.apiFilter);
  }
  getDrinks(filter:string){
    // let params = new HttpParams();
    // params = params.append('c', filter.join(', '));
    return this.http.get<DrinksCollection>(this.apiDrinks, { params: {c: filter} });
  }
}

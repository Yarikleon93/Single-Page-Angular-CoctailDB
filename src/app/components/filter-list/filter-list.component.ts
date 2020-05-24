import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FilterCollection } from '../../models/filter-collection';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit, OnChanges {
  @Input() filter: FilterCollection;
  @Output() onChange = new EventEmitter();
  filterList: {
    [index: number]: boolean;
  } = {};

  constructor() { }

  filterItem() {
    this.emit();
  }

  ngOnInit(): void {
  }

  ngOnChanges({filter}: SimpleChanges) {
    if (filter.currentValue) {
      this.filterList = filter.currentValue.drinks.reduce((acc, drink, index) => {
        acc[index] = true;
        return acc;
      }, {})
      this.emit();
    }
  }

  emit() {
    this.onChange.emit(this.filter.drinks.filter((value, index) => {
      return this.filterList[index];
    }).map(item => item.strCategory))
  }
}

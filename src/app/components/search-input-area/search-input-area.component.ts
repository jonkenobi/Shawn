import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-input-area',
  templateUrl: './search-input-area.component.html',
  styleUrls: ['./search-input-area.component.css'],
})
export class SearchInputAreaComponent implements OnInit {
  @Output() onSearch = new EventEmitter<Object>();
  tripDuration = 1;
  attributes = new Set();

  onSubmit() {
    this.onSearch.emit({
      tripDuration: this.tripDuration,
      attributes: this.attributes,
    });
  }

  attributesOptions = [
    { name: 'shopping', value: true, icon: 'shopping_bag' },
    { name: 'drinks', value: true, icon: 'local_bar' },
    { name: 'coffee', value: true, icon: 'coffee' },
    { name: 'nature', value: true, icon: 'park' },
  ];
  tripDurations = [
    { name: 'Closeby (~20 mins)', value: 1 },
    { name: '20 ~ 40 mins', value: 2 },
    { name: 'Up to 1 hr', value: 3 },
    { name: 'Somewhere far', value: 4 },
  ];
  // timeDurations = [
  //   { name: '~3hrs', value: 1 },
  //   { name: 'Half Day (3~5 hrs)', value: 2 },
  //   { name: '1 day', value: 3 },
  // ];

  constructor() {}

  ngOnInit() {}

  onCheckboxChange(event: any, propertyName: string) {
    event.checked
      ? this.attributes.add(propertyName)
      : this.attributes.delete(propertyName);
  }

  capitalizeFirstLetter(string: String) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

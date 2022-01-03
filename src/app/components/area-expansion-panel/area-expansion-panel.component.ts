import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../models/place';

@Component({
  selector: 'app-area-expansion-panel',
  templateUrl: './area-expansion-panel.component.html',
  styleUrls: ['./area-expansion-panel.component.css'],
})
export class AreaExpansionPanelComponent implements OnInit {
  @Input() areaName: string = '';
  @Input() allPlaces: Place[] = [];

  constructor() {}

  ngOnInit(): void {}

  filterByArea(): Place[] {
    return this.allPlaces.filter(
      (location: any) => location.area == this.areaName
    );
  }
}

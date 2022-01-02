import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-area-expansion-panel',
  templateUrl: './area-expansion-panel.component.html',
  styleUrls: ['./area-expansion-panel.component.css']
})
export class AreaExpansionPanelComponent implements OnInit {
  @Input() areaName: string = "";
  @Input() allLocations: any = {}
  
  constructor() { }

  ngOnInit(): void {
  }

}

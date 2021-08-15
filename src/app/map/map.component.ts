import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  position: any;
  constructor() {}

  ngOnInit() {
    this.getUserCurrentLocation() 
  }

  getUserCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.position =
        position.coords.longitude + ', ' + position.coords.latitude;
    });
  }
  report(state: any) {
    console.log('Permission ' + state);
  }

  isUserLocationPermissionDenied() {
    return navigator.permissions
      .query({ name: 'geolocation' })
      .then((permission) => {
        return permission.state == 'denied';
      });
  }
}

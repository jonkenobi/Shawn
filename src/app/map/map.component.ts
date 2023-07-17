import { BackendService } from './../services/backend.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [BackendService],
})
export class MapComponent implements OnInit {
  @Output() positionReceived = new EventEmitter<any>();
  position: any;
  isLocationAccessPermissionDenied: boolean = false;
  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.getUserCurrentLocation();
    navigator.permissions.query({ name: 'geolocation' }).then((permission) => {
      this.report(permission.state);
      this.isLocationAccessPermissionDenied = permission.state == 'denied';
    });
  }

  getUserCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.position =
       position.coords.latitude + ','+position.coords.longitude
      this.positionReceived.emit(this.position);
    });
  }
  report(state: any) {
    console.log('Permission ' + state);
  }

  getPositionUrl(): string{
    return "https://www.google.com/maps/@"+ this.position;
  }
}

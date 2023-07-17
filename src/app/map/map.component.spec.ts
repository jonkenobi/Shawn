import { BackendService } from './../services/backend.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [BackendService],
})
export class MapComponent implements OnInit {
  @Output() positionReceived = new EventEmitter<any>();
  mapUrl: SafeResourceUrl = "";
  position: any;
  isLocationAccessPermissionDenied: boolean = false;
  constructor(private backendService: BackendService, public sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.getUserCurrentLocation();
    navigator.permissions.query({ name: 'geolocation' }).then((permission) => {
      this.report(permission.state);
      this.isLocationAccessPermissionDenied = permission.state == 'denied';
    });
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl("http://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8903.6253873113!2d139.68338731805594!3d35.69798273593038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f2d3bc9fb4d5%3A0xcdd9ff977d74a87!2z44CSMTY5LTAwNzQgVG9reW8sIFNoaW5qdWt1IENpdHksIEtpdGFzaGluanVrdSwgMi1jaMWNbWXiiJIxOeKIkjEyIOODquODk-OCqg!5e0!3m2!1sen!2sjp!4v1676732097502!5m2!1sen!2sjp")
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

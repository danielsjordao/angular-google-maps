import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {}

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: -23.56,
    lng: -46.52
  };

  zoom = 4;

  moveMap (event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move (event: google.maps.MapMouseEvent){
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }


}

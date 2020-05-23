import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  title: string = 'AGMtest';
  latitude: number;
  longitude: number;
  zoom: number;

  constructor() { }

  ngOnInit(): void {
    this.setCurrentLocation();
  }

  private setCurrentLocation(){

    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position) =>{

        this.latitude= position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom= 20;
      });

    }
  }

}

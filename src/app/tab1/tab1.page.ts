import { Component } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['./gps.css']
})
export class Tab1Page {

  position: Position | null = null;

  constructor() {
    this.getPosition();
  }

  getPosition(): void {
    Geolocation
      .getCurrentPosition()
      .then((position: Position) => {
        console.log(position);
        this.position = position;
      })
  }

}

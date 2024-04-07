import { Component, Input, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-zemljevid',
  templateUrl: './zemljevid.component.html',
  styleUrls: ['./zemljevid.component.css'],
})
export class ZemljevidComponent {
  @Input() lat: number = 0;
  @Input() lng: number = 0;
  private map: L.Map | undefined;
  private marker: L.Marker | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['lat'] || changes['lng']) && !changes['lat'].isFirstChange() && !changes['lng'].isFirstChange()) {
      this.mapRender();
    }
  } 

  mapRender() {
    if (!this.map) {
      this.map = L.map('map').setView([0, 0], 13);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(this.map);
    }

    if (this.lat > 0 && this.lng > 0) {
      this.map.setView([this.lat, this.lng], 13);
      if (this.marker) {
        this.map.removeLayer(this.marker);
      }
      this.marker = L.marker([this.lat, this.lng], { icon: redIcon }).addTo(this.map);
    } else {
      this.map.setView([46.051039, 14.503848], 13);
      if (this.marker) {
        this.map.removeLayer(this.marker);
      }
    }
  }

  ngOnInit(): void {
    this.mapRender();
  }
}

const redIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});

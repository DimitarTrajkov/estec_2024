import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pregled-page',
  templateUrl: './pregled-page.component.html',
  styleUrl: './pregled-page.component.css'
})
export class PregledPageComponent {
  lat: number = 0
  lng: number = 0

  constructor(private http: HttpClient) {}

  submit() {
    var selectDo = document.getElementById('do_select') as HTMLSelectElement;
    var selectOd = document.getElementById('od_select') as HTMLSelectElement;
    var gym = document.getElementById('telovadnica') as HTMLSelectElement;
    if(gym.value != "0" && selectOd.value != "0" && parseInt(selectDo.value) >= parseInt(selectOd.value)) {
        switch(gym.value) {
          case '1': 
            this.lat = 46.062435
            this.lng = 14.50862
            break;
          case '2':
            this.lat =  46.061345
            this.lng = 14.541045
            break;
          case '3':
            this.lat = 46.059817
            this.lng = 14.518447
            break;
          case '4':
            this.lat = 46.245762
            this.lng = 15.278584
            break;
          case '5':
            this.lat = 46.076444 
            this.lng = 14.510828
            break;
          case '6':
            this.lat = 46.059904
            this.lng = 14.534631
            break;
          case '7':
            this.lat = 46.069197
            this.lng = 14.543612
        }
        this.fetchData(selectOd.value, selectDo.value, gym.value)
    }
  }

  fetchData(param1: any, param2: any, param3: any): void {
    this.http.get(`http://127.0.0.1:5000/get_statistika_hours?param1=${param1}&param2=${param2}&param3=${param3}`).subscribe(
      (result: any) => {
        var statistika = document.getElementById("statistika")
        if(statistika)
          statistika.innerHTML = '<h3>STATISTIKA</h3><div style="padding-bottom: 10px;width: 100%;display: flex;'
        + 'justify-content: space-around;margin: 0;font-weight: 700;"><p style=" margin: 0;font-weight: 700;"">'
        + 'ČAS</p><p style="font-weight: 700;margin: 0">ŠT LJUDI</p></div>';
        result.forEach(function (value: string) {
          let newDiv = document.createElement("div");
          let newParagraph = document.createElement("p");
          newParagraph.textContent = value;
          newDiv.appendChild(newParagraph)
          statistika?.appendChild(newDiv);
        }); 
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
}
}

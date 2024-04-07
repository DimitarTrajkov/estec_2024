import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pregled-page',
  templateUrl: './pregled-page.component.html',
  styleUrl: './pregled-page.component.css'
})
export class PregledPageComponent {

  constructor(private http: HttpClient) {}

  submit() {
    var selectDo = document.getElementById('do_select') as HTMLSelectElement;
    var selectOd = document.getElementById('od_select') as HTMLSelectElement;
    var gym = document.getElementById('telovadnica') as HTMLSelectElement;
    console.log(parseInt(selectDo.value))
    console.log(parseInt(selectOd.value))
    if(gym.value != "0" && selectOd.value != "0" && parseInt(selectDo.value) >= parseInt(selectOd.value))
        this.fetchData(selectOd.value, selectDo.value, gym.value)
  }

  fetchData(param1: any, param2: any, param3: any): void {
    this.http.get(`http://127.0.0.1:5000/get_statistika_hours?param1=${param1}&param2=${param2}&param3=${param3}`).subscribe(
      (result: any) => {
        var statistika = document.getElementById("statistika")
        if(statistika)
          statistika.innerHTML = '';
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

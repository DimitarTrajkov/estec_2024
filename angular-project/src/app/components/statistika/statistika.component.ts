import { GraphDataType } from "../../models/GraphDataType";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-statistika',
  templateUrl: './statistika.component.html',
  styleUrl: './statistika.component.css'
})
export class StatistikaComponent {
  dataGraph1: GraphDataType[] = []
  dataGraph2: GraphDataType[] = []
  dataGraph3: GraphDataType[] = []
  dataGraph4: GraphDataType[] = []
  daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  dayOfWeekNumber = new Date().getDay();
  fitnessString: string = ''

  constructor(private http: HttpClient) {}

  fetchData(): void {
    var gym = document.getElementById('gym') as HTMLSelectElement
    var gymValue = parseInt(gym.value)
    console.log(gymValue)
    if(gymValue > 0) {
      this.fitnessString = gym.options[gymValue].text + ' -'
      this.http.get(`http://127.0.0.1:5000/get_data?param1=${gymValue}`).subscribe(
        (result: any) => {
          this.dataGraph1 = result
        },
        error => {
          console.error('Error fetching data:', error);
        }
      );
      this.http.get(`http://127.0.0.1:5000/get_data?param1=${(gymValue+1)%4}`).subscribe(
        (result: any) => {
          this.dataGraph2 = result
        },
        error => {
          console.error('Error fetching data:', error);
        }
      );
      this.http.get(`http://127.0.0.1:5000/get_data?param1=${(gymValue+2)%4}`).subscribe(
        (result: any) => {
          this.dataGraph3 = result
        },
        error => {
          console.error('Error fetching data:', error);
        }
      );
      this.http.get(`http://127.0.0.1:5000/get_data?param1=${(gymValue+3)%4}`).subscribe(
        (result: any) => {
          this.dataGraph4 = result
        },
        error => {
          console.error('Error fetching data:', error);
        }
      );
    }
  }
}

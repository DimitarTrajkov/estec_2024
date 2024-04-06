import { GraphDataType } from "../../models/GraphDataType";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-statistika',
  templateUrl: './statistika.component.html',
  styleUrl: './statistika.component.css'
})
export class StatistikaComponent {
  data: GraphDataType[] = []

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get('http://127.0.0.1:5000/get_data').subscribe(
      (result: any) => {
        console.log(result)
        this.data = result;
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
}

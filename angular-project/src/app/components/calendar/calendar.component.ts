// calendar.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  currentDate: Date = new Date();

  getWeeksInMonth(date: Date): (Date | null)[][] {
    const weeks: (Date | null)[][] = [];
    const firstDateOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDateOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let currentWeek: (Date | null)[] = [];
  
    // Add null entries for days before the first day of the month
    for (let i = 0; i < firstDateOfMonth.getDay(); i++) {
      currentWeek.push(null);
    }
  
    // Populate the array with dates for the current month
    for (let i = 1; i <= lastDateOfMonth.getDate(); i++) {
      const currentDate = new Date(date.getFullYear(), date.getMonth(), i);
      currentWeek.push(currentDate);
      if (currentDate.getDay() === 6) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }
  
    // If there are remaining days in the last week, fill them with null
    if (currentWeek.length > 0) {
      for (let i = currentWeek.length; i < 7; i++) {
        currentWeek.push(null);
      }
      weeks.push(currentWeek);
    }
  
    return weeks;
  }
  

  selectDate(date: Date | null): void {
    if (date) {
      console.log('Selected date:', date);
      // Add your logic here for handling the selected date
    }
  }
}

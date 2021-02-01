import { Component, OnInit } from '@angular/core';
import { calendarData } from './../../models/calendarData'
import { FullCalendarModule } from '@fullcalendar/angular';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

calendarDataAlumni:calendarData[];

dati = (array)=>{
  for (let i = 0; i < array.length; i++) {
    let student = {
      title: array[i].name + " " + array[i].surname,
      start: array[i].intDateIta,
    }
    this.calendarDataAlumni.push(student);
  };
  for (let i = 0; i < array.length; i++) {
    let student = {
      title: array[i].name + " " + array[i].surname,
      start: array[i].intDateSto,
      backgroundColor: "red"
    }
    this.calendarDataAlumni.push(student);
  }
};

// drawCalendar(array, buttonUsed, buttonUnused1, buttonUnused2) {
//   buttonUsed.classList.add("selected");
//   buttonUnused1.classList.remove("selected");
//   buttonUnused2.classList.remove("selected");
//   // calendarView.classList.remove("hide");
//   this.calendarDataAlumni = [];
//   this.dati(array); 
//   var calendarEl = document.getElementById('calendar');
//   // var calendar = new FullCalendar.Calendar(calendarEl, {
//     initialView: 'dayGridMonth',
//     initialDate: '2021-01-07',
//     headerToolbar: {
//       left: 'prev,next today',
//       center: 'title',
//       right: 'dayGridMonth,timeGridWeek,timeGridDay'
//     },
//     events: calendarData
//   });
//   calendar.render();
// };

}

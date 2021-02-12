import { Component,Input, OnInit } from '@angular/core';
import { calendarData } from './../../models/calendarData'
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { alumniService } from '../../service/alumni.service';
import { alumniData } from './../../models/alumniData';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Input() selectedClass:string = "1A";
  alumni:alumniData[];
  calendarDataAlumni:calendarData[] = [];
  constructor(private alumniServices:alumniService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const selectedClasse = this.route.snapshot.params.selectedClass || this.selectedClass || '0A';
    this.alumni = this.alumniServices.loadAlunni().filter(alumno => alumno.class === selectedClasse) || [];

    
      for (let i = 0; i < this.alumni.length; i++) {
        let student = {
          title: this.alumni[i].name + " " + this.alumni[i].surname,
          date: this.alumni[i].dateIta,
          backgroundColor: "#709fb0",
          borderColor: "#709fb0"
        }
        this.calendarDataAlumni.push(student);
      };
      for (let i = 0; i < this.alumni.length; i++) {
        let student = {
          title: this.alumni[i].name + " " + this.alumni[i].surname,
          date: this.alumni[i].dateSto,
          backgroundColor: "#d8ac9c",
          borderColor: "#d8ac9c"
        }
        this.calendarDataAlumni.push(student);
      }
    

  }
  





calendarOptions: CalendarOptions = {
  initialView: 'dayGridMonth',
  headerToolbar: {
  left: 'prev,next today',
  center: 'title',
  },
  locale: 'it',
  events: this.calendarDataAlumni
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

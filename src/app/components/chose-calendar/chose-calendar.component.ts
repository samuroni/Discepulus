import { Component, OnInit } from '@angular/core';
import { ClassesService } from 'src/app/service/classes.service';


@Component({
  selector: 'app-chose-calendar',
  templateUrl: './chose-calendar.component.html',
  styleUrls: ['./chose-calendar.component.scss']
})
export class ChoseCalendarComponent implements OnInit {

  classes:string[] = [];
  constructor(private classesService:ClassesService) { }

  ngOnInit(): void {
  }
  choseThisClass(classe:string){
    this.classesService.choseClass(classe);
    this.classes = this.classesService.getClassesList()
  };

}

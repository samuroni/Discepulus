import { Component, OnInit } from '@angular/core';
import { ClassesService } from 'src/app/service/classes.service';

@Component({
  selector: 'app-alumni-list',
  templateUrl: './alumni-list.component.html',
  styleUrls: ['./alumni-list.component.scss']
})
export class AlumniListComponent implements OnInit {

  classes:string[];
  constructor(private classesService:ClassesService) { }
  
  ngOnInit(): void {}

  choseThisClass(classe:string){
    this.classesService.choseClass(classe);
    this.classes = this.classesService.getClassesList()
  };
  



}

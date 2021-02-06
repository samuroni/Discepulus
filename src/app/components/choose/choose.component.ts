import { Component, OnInit } from '@angular/core';
import { ClassesService } from 'src/app/service/classes.service';
import { ChosesubjectService } from './../../service/chosesubject.service'

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent implements OnInit {

  selectedSubject:string = "italiano"
  classes:string[] = [];
  constructor(private classesService:ClassesService, private choseSubjectService:ChosesubjectService) { }

  ngOnInit(): void {};

  choseThisClass(classe:string){
    this.classesService.choseClass(classe);
    this.classes = this.classesService.getClassesList()
    console.log("da chose this class", this.classes)
  };

  choseThisSubject(subject:string){
    this.choseSubjectService.choseSubject(subject);
    this.selectedSubject = this.choseSubjectService.getSubjectList()
  }
 

};


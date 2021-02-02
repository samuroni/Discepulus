import { Component, OnInit } from '@angular/core';
import { alumniService } from '../../service/alumni.service'
import { alumniData } from './../../models/alumniData';

@Component({
  selector: 'app-insert-student',
  templateUrl: './insert-student.component.html',
  styleUrls: ['./insert-student.component.scss']
})
export class InsertStudentComponent implements OnInit {

  alumni:alumniData[];
  inputName:string;
  inputSurname:string;
  radio:string;

  constructor(private alumniServices:alumniService) { }

  ngOnInit(): void {
    this.alumni = this.alumniServices.loadAlunni() || [];
  }

  saveAlumni (){
    this.alumniServices.saveAlunni(this.alumni);
  }

  addAlumni () {
    if (this.radio){
      let alumno:alumniData = {
        name: this.inputName,
        surname: this.inputSurname,
        class: this.radio,
        id: Date.now() + this.inputName + this.inputSurname,
        isChosenIta: false,
        isChosenSto: false,
        dateIta: undefined,
        dateSto: undefined
      }; 
      this.alumni.push(alumno);
      this.saveAlumni();
      alert("L' alunno " + alumno.name + " " + alumno.surname + " è stato inserito nella classe " + alumno.class);
      this.inputName = "";
      this.inputSurname = "";
      console.log(this.alumni)
    } else {alert("Devi selezionare una classe!")};
  };
}

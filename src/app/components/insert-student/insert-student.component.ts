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

  whichClass () {
      if (this.radio) {return this.radio} 
      else{alert("Non hai selezionato una classe!")}
    }
    

  addAlumni () {

    let alumno:alumniData = {
      name: this.inputName,
      surname: this.inputSurname,
      class: this.whichClass(),
      id: Date.now() + this.inputName + this.inputSurname,
      isChosenIta: false,
      isChosenSto: false,
      dateIta: undefined,
      dateSto: undefined
    }; 
 
    this.alumni.push(alumno);
    this.saveAlumni();
    this.inputName = "";
    this.inputSurname = "";
    console.log(this.alumni)
  }
  




}

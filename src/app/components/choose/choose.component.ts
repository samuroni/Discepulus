import { Component, OnInit } from '@angular/core';
import { alumniService } from '../../service/alumni.service';
import { alumniData } from './../../models/alumniData';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent implements OnInit {

  alumni:alumniData[];

  constructor(private alumniServices:alumniService) { }

  ngOnInit(): void {
    this.alumni = this.alumniServices.loadAlunni() || [];
  };

  alumniClassTopic(classe:string, topic:string) {
    return this.alumni.filter(alumno => alumno.class === classe && alumno[topic]) || [];
  };

  randomStudentPick (array){
    return Math.floor(Math.random()*array.length)
  };

  choseRandom (classe:string, topic:string){
    const filteredAlumni = this.alumni.filter(alumno => alumno.class === classe && alumno[topic] === false);
    if (filteredAlumni.length > 0){
      const filteredAlumniIndex = this.randomStudentPick(filteredAlumni);
      filteredAlumni[filteredAlumniIndex][topic] = true
      this.alumniServices.saveAlunni(this.alumni);
    } else {alert("Tutti gli alunni di questa classe sono stati scelti!")}
  };

  deleteChosen (index, classe, topic) {
    const check = confirm("Sei sicuro di voler annullare la scelta?")
    if (check){
    this.alumni.filter(alumno => alumno.class === classe && alumno[topic] === true)[index][topic] = false;} 
    this.alumniServices.saveAlunni(this.alumni);
  };

  resetChosenList (topic, classe){
    const check = confirm("sei sicuro di voler cancellare tutta la lista?");
    if (check){
      for(let alumno of this.alumni){
        if (alumno.class === classe){
          alumno[topic] = false;
        };
      };
      this.alumniServices.saveAlunni(this.alumni);
    };
  };


};


import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { alumniService } from '../../service/alumni.service';
import { alumniData } from './../../models/alumniData';

@Component({
  selector: 'app-chosen-list',
  templateUrl: './chosen-list.component.html',
  styleUrls: ['./chosen-list.component.scss']
})
export class ChosenListComponent implements OnInit {

  @Input() selectedSubject:string = "italiano"
  @Input() selectedClass:string = "2B";
  alumni:alumniData[];

  constructor(private alumniServices:alumniService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const selectedClasse = this.route.snapshot.params.selectedClass || this.selectedClass || '0A';
    this.alumni = this.alumniServices.loadAlunni().filter(alumno => alumno.class === selectedClasse) || [];
  }

  topicToDisplay(){
    if(this.selectedSubject === "italiano"){return "isChosenIta"}else{
      return "isChosenSto"
    };
  };

  alumniToDisplay (){
    if(this.selectedSubject === "italiano"){
      return this.alumni.filter(alumno => alumno.isChosenIta === true)
    }else {
      return this.alumni.filter(alumno => alumno.isChosenSto === true)
    }
  };

  randomStudentPick (alumniArray){
    return Math.floor(Math.random()*alumniArray.length)
  };

  saveAfterModification(){
    var alumniEdited = this.alumniServices.loadAlunni().filter(alumno => alumno.class !== this.selectedClass);
    alumniEdited.push( ...this.alumni );
    this.alumniServices.saveAlunni(alumniEdited);
  };

  choseRandom (topic:string){
    const filteredAlumni = this.alumni.filter(alumno => alumno[topic] === false);
    if (filteredAlumni.length > 0){
      const filteredAlumniIndex = this.randomStudentPick(filteredAlumni);
      filteredAlumni[filteredAlumniIndex][topic] = true
      this.saveAfterModification()
    } else {alert("Tutti gli alunni di questa classe sono stati scelti!")}
  };

  deleteChosen (alumnoToDelete) {
    const check = confirm("Sei sicuro di voler annullare la scelta?")
    if (check){
    alumnoToDelete.isChosenIta === false ;
    this.saveAfterModification()
    };
  };

  resetChosenList (topic){
    const check = confirm("sei sicuro di voler cancellare tutta la lista?");
    if (check){
      for(let alumno of this.alumni){
          alumno[topic] = false;
      };
    this.saveAfterModification();
    };
  };

}

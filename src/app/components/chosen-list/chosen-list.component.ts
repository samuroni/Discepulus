import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RandomIndexServiceService } from 'src/app/service/random-index-service.service';
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
  chosenDate:Date

  constructor(private alumniServices:alumniService, private randomIndexService:RandomIndexServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log('selected subject', this.selectedSubject)
    const selectedClasse = this.route.snapshot.params.selectedClass || this.selectedClass || '0A';
    this.alumni = this.alumniServices.loadAlunni().filter(alumno => alumno.class === selectedClasse) || [];
  }

  topicToDisplay(){
    if(this.selectedSubject === "italiano"){return "isChosenIta"}else{
      return "isChosenSto"
    };
  };

  indexTopic(){
    if(this.selectedSubject === "italiano"){return "indexIta"}else{
      return "indexSto"
    };
  }

  alumniToDisplay (){
    if(this.selectedSubject === "italiano"){
      return this.alumni.filter(alumno => alumno.isChosenIta === true).sort((a, b) => {
        var indexA = a[(this.selectedSubject === 'italiano'? 'indexIta' : 'indexSto')]; 
        var indexB = b[(this.selectedSubject === 'italiano'? 'indexIta' : 'indexSto')]; 
        if (indexA < indexB) {
          return -1;
        }
        if (indexA > indexB) {            
          return 1;
        }
        return 0;
      });
      
    }else {
      return this.alumni.filter(alumno => alumno.isChosenSto === true).sort((a, b) => {
        var indexA = a[(this.selectedSubject === 'italiano'? 'indexIta' : 'indexSto')]; 
        var indexB = b[(this.selectedSubject === 'italiano'? 'indexIta' : 'indexSto')]; 
        if (indexA < indexB) {
          return -1;
        }
        if (indexA > indexB) {            
          return 1;
        }
        return 0;
      });
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

  choseRandom (topic:string, indexTopic:string){
    const filteredAlumni = this.alumni.filter(alumno => alumno[topic] === false);
    if (filteredAlumni.length > 0){
      const filteredAlumniIndex = this.randomStudentPick(filteredAlumni);
      filteredAlumni[filteredAlumniIndex][topic] = true
      filteredAlumni[filteredAlumniIndex][indexTopic] = this.randomIndexService.randomSelectionCount(indexTopic);
      console.log("this is filteredalumni ",filteredAlumni)
     
      this.saveAfterModification()
    } else {alert("Tutti gli alunni di questa classe sono stati scelti!")}
  };

  deleteChosen (alumnoToDelete) {
    const check = confirm("Sei sicuro di voler annullare la scelta?")
    if (check){
    alumnoToDelete[this.topicToDisplay()] = false ;
    this.saveAfterModification()
    console.log(alumnoToDelete)
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

  setDate (alumno){
    alumno.dateIta= this.chosenDate;
    console.log('DA SETDATE', this.chosenDate)
  };

}

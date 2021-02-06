import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { alumniService } from '../../service/alumni.service';
import { alumniData } from './../../models/alumniData';

@Component({
  selector: 'app-alumni-tabs',
  templateUrl: './alumni-tabs.component.html',
  styleUrls: ['./alumni-tabs.component.scss']
})
export class AlumniTabsComponent implements OnInit {

  @Input() selectedClass:string = "1A";
  alumni:alumniData[];

  constructor(private alumniServices:alumniService, private route:ActivatedRoute) {}
  
  ngOnInit(): void {
    const selectedClasse = this.route.snapshot.params.selectedClass || this.selectedClass || '0A';
    this.alumni = this.alumniServices.loadAlunni().filter(alumno => alumno.class === selectedClasse) || [];
    
    this.alumni.sort(function(a, b) {
      var nameA = a.surname.toUpperCase(); 
      var nameB = b.surname.toUpperCase(); 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {            
        return 1;
      }
      return 0;
    });

    
 

  }

  alumniClass(classe:string) {
   return this.alumni.filter(alumno => alumno.class === classe) || [];
  }

  saveAfterModification(alumni){
    var alumniEdited = this.alumniServices.loadAlunni().filter(alumno => alumno.class !== this.selectedClass);
    alumniEdited.push( ...alumni );
    this.alumniServices.saveAlunni(alumniEdited);
  };

  deleteAlumno (alumnoToDelete) {
    const check = confirm("Sei sicuro di voler eliminare " + alumnoToDelete.name + " " + alumnoToDelete.surname + "dalla classe " + alumnoToDelete.class + "?")
    if (check){
    this.alumni = this.alumni.filter(alunno => alumnoToDelete.id !== alunno.id);
    console.log(this.alumni)
    this.saveAfterModification(this.alumni)
    };
  };

  editAlumno (alumnoToEdit){
    const check = confirm("Sei sicuro di voler modificare " + alumnoToEdit.name + " " + alumnoToEdit.surname + "della classe " + alumnoToEdit.class + "?")
    if(check){
      alumnoToEdit.name = prompt("Inserisci il nuovo nome:");
      alumnoToEdit.surname = prompt("Inserisci il nuovo cognome:")
      alumnoToEdit.name = alumnoToEdit.name.charAt(0).toUpperCase() + alumnoToEdit.name.slice(1)
      alumnoToEdit.surname = alumnoToEdit.surname.charAt(0).toUpperCase() + alumnoToEdit.surname.slice(1)  
      this.saveAfterModification(this.alumni)
    };
  };
};

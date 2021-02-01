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
  deleteButton:string;

  constructor(private alumniServices:alumniService, private route:ActivatedRoute) {
  }
  
  ngOnInit(): void {
    const selectedClasse = this.route.snapshot.params.selectedClass || this.selectedClass || '0A';
    this.alumni = this.alumniServices.loadAlunni().filter(alumno => alumno.class === selectedClasse) || [];
  }

  alumniClass(classe:string) {
   return this.alumni.filter(alumno => alumno.class === classe) || [];
  }

  deleteAlumno (alumnoToDelete) {
    const check = confirm("Sei sicuro di voler eliminare questo alunno?")
    if (check){
   
    this.alumni = this.alumni.filter(alunno => alumnoToDelete.id !== alunno.id);
    console.log(this.alumni)
    // this.alumniServices.saveAlunni(this.alumni);
    };
  };

};

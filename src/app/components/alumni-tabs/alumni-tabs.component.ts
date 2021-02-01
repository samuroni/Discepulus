import { Component, OnInit } from '@angular/core';
import { alumniService } from './../../models/alumni.service';
import { alumniData } from './../../models/alumniData';


@Component({
  selector: 'app-alumni-tabs',
  templateUrl: './alumni-tabs.component.html',
  styleUrls: ['./alumni-tabs.component.scss']
})
export class AlumniTabsComponent implements OnInit {

  alumni:alumniData[];
  deleteButton:string;

  constructor(private alumniServices:alumniService) { }

  ngOnInit(): void {
    this.alumni = this.alumniServices.loadAlunni() || [];
  }

  alumniClass(classe:string) {
   return this.alumni.filter(alumno => alumno.class === classe) || [];
  }

  deleteAlumno (alumno) {
    const check = confirm("Sei sicuro di voler eliminare questo alunno?")
    if (check){
    console.log("prima ", this.alumni)

    this.alumni = this.alumni.filter(alumno => alumno.id !== "")}
    console.log("dopo " , this.alumni)
    // this.alumniServices.saveAlunni(this.alumni);
  };

};

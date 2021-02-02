import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChosesubjectService {

  constructor() { }

  subject:string; 
  getSubjectList() {
    return this.subject
  };

  choseSubject(selectedSubject:string){
    return this.subject = selectedSubject;
  }
}

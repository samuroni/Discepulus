import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor() { }

  classes:string[]; 
  getClassesList() {
    return this.classes
  };

  choseClass(classe:string){
    return this.classes = [classe]
  }
};

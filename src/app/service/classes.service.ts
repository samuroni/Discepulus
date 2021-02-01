import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor() { }

  getClassesList() {
    return [
      '1A','1B','2B'
    ]
  }

}

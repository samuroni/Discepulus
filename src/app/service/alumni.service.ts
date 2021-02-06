import { Injectable } from '@angular/core';
import { alumniData } from '../models/alumniData';

@Injectable({
  providedIn: 'root'
})
export class alumniService {

  constructor() { 
    
  }

  saveAlunni (alumni:alumniData[]){
    localStorage.setItem("alumniDataStore", JSON.stringify(alumni));
  };

  loadAlunni ():alumniData[]{
    let alumni = JSON.parse(localStorage.getItem("alumniDataStore"));
    return alumni;
  };

}


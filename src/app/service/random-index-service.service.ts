import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomIndexServiceService {

  constructor() { }

  randomselectionIndex ={indexIta: 0, indexSto: 0};

  saveRandomSelectionIndex (indexVar){
    localStorage.setItem("RandomSelectionIndex", JSON.stringify(indexVar));
  };

  loadRandomSelectionIndex () {
    this.randomselectionIndex = JSON.parse(localStorage.getItem("RandomSelectionIndex"));
  };

  randomSelectionCount (indexTopic){
    this.loadRandomSelectionIndex()
    this.randomselectionIndex[indexTopic] ++
    console.log("da randomselectioncount", this.randomselectionIndex)
    this.saveRandomSelectionIndex(this.randomselectionIndex)
    return this.randomselectionIndex[indexTopic];
  };

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { AlumniTabsComponent } from './components/alumni-tabs/alumni-tabs.component';
import { InsertStudentComponent } from './components/insert-student/insert-student.component';
import { ChooseComponent } from './components/choose/choose.component';
import { AlumniListComponent } from './components/alumni-list/alumni-list.component';
import { ChosenListComponent } from './components/chosen-list/chosen-list.component';
import { ChoseCalendarComponent } from './components/chose-calendar/chose-calendar.component';

const routes: Routes = [
  {
    path: 'instructions',
    component: InstructionsComponent,
  },
  {
    path: 'alumni',
    component: AlumniListComponent,
  },
  {
    path: 'classe/:selectedClasse',
    component: AlumniTabsComponent,    
  },
  {
    path: 'calendars',
    component: ChoseCalendarComponent
  },
  {
    path: 'insertStudent',
    component: InsertStudentComponent
  },
  {
    path: 'chooseAlumni',
    component: ChooseComponent
  },
  {
    path: 'chosenList/:selectedClasse',
    component: ChosenListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

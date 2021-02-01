import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { AlumniTabsComponent } from './components/alumni-tabs/alumni-tabs.component';
import { InsertStudentComponent } from './components/insert-student/insert-student.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ChooseComponent } from './components/choose/choose.component';
import { AlumniListComponent } from './components/alumni-list/alumni-list.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

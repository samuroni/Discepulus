import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { AlumniTabsComponent } from './components/alumni-tabs/alumni-tabs.component';
import { InsertStudentComponent } from './components/insert-student/insert-student.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ChooseComponent } from './components/choose/choose.component';
import { FormsModule } from '@angular/forms';
import { AlumniListComponent } from './components/alumni-list/alumni-list.component';
import { ChosenListComponent } from './components/chosen-list/chosen-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InstructionsComponent,
    AlumniTabsComponent,
    InsertStudentComponent,
    CalendarComponent,
    ChooseComponent,
    AlumniListComponent,
    ChosenListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

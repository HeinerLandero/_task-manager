
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component'; // Importa TaskListComponent

// Servicios
import { TaskService } from './services/task.service';
import { PersonService } from './services/person.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent // Declara TaskListComponent aquí
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TaskService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



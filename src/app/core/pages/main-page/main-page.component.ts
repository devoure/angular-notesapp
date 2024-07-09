import { Component } from '@angular/core';
import { AddTaskComponent } from '../../../features/add-task/add-task.component';
import { FilterTasksComponent } from '../../../features/filter-tasks/filter-tasks.component';
import { DisplayTasksComponent } from '../../../features/display-tasks/display-tasks.component';
import { Tasks } from '../../../shared/models/tasks';
import EventBusService from '../../../shared/services/EventService';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    AddTaskComponent,
    FilterTasksComponent,
    DisplayTasksComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(){
    EventBusService.listen('removeTask', (payload)=>{
      this.tasks.splice(payload, 1);
    });
  }

  newTask : string = '';
  listFilter: string = '0';

  get visibleTasks(){
     return this.tasks.filter(this.filters[+this.listFilter]);
  };

  filters = [
    (task: Tasks)=>task,
    (task: Tasks)=>!task.isComplete,
    (task: Tasks)=>task.isComplete
  ]

  tasks : Tasks[] = [
    new Tasks('Learn Frontend'),
    new Tasks('Learn Ride a bike', true)
  ]

}

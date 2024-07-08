import { Component } from '@angular/core';
import { CommonModule} from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { Tasks } from '../shared/models/tasks'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tasker';
  newTask : string = ''

  tasks : Tasks[] = [
    new Tasks('Learn Frontend'),
    new Tasks('Learn Ride a bike', true)
  ]

  filters = [
    (task: Tasks)=>task,
    (task: Tasks)=>!task.isComplete,
    (task: Tasks)=>task.isComplete
  ]

  get visibleTasks(): Tasks[]{
    return this.tasks.filter(this.filters[+this.listFilter]);
  };

  checkTask(task : Tasks){
    task.isComplete = !task.isComplete
    console.log(task)
  }

  addTask(){
    this.tasks.push(new Tasks(this.newTask))
    this.newTask = ''
  }

  filterTasks(e : any){
    this.listFilter = e.target.value;
  }
}

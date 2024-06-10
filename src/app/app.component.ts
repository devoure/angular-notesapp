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
  selectedOption : boolean[] = [true, false, false]
  listFilter : string = '1'

  tasks : Tasks[] = [
    new Tasks('Learn Frontend'),
    new Tasks('Learn Ride a bike', true)
  ]

  visibleTasks : Tasks[] = this.tasks

  checkTask(task : Tasks){
    task.isComplete = !task.isComplete
    console.log(task)
  }

  addTask(){
    console.log('>>> Adding ', this.newTask)
    this.tasks.push(new Tasks(this.newTask))
    this.newTask = ''
  }

  filterTasks(e : any){
    console.log(">>> ", e.target.value)
    if (e.target.value === '0'){
      this.visibleTasks = this.tasks
    } else if (e.target.value === '1'){
      this.visibleTasks = this.tasks.filter(item => !item.isComplete)
    } else{
      this.visibleTasks = this.tasks.filter(item => item.isComplete)
    }
  }
}

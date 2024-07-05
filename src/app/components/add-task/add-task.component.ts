import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent {
  newTask : string = '';

  addTask(){
    this.tasks.push(new Tasks(this.newTask))
    this.newTask = ''
  }
}

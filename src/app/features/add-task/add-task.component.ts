import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tasks } from '../../shared/models/tasks';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input() tasks!: Tasks[];

  newTask: string = '';

  addTask(){
    console.log(">>> New Task: ", this.newTask);
    this.tasks.push(new Tasks(this.newTask));
    this.newTask = '';
  }
}

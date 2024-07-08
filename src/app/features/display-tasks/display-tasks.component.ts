import { Component, Input } from '@angular/core';
import { Tasks } from '../../shared/models/tasks';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-tasks',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './display-tasks.component.html',
  styleUrl: './display-tasks.component.css'
})
export class DisplayTasksComponent {
  @Input() visibleTasks!: Tasks[];
  @Input() tasks!: Tasks[];


  checkTask(task : Tasks){
    task.isComplete = !task.isComplete
  }


}
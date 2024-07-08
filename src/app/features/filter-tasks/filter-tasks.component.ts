import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Tasks } from '../../../shared/models/tasks'

@Component({
  selector: 'app-filter-tasks',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './filter-tasks.component.html',
  styleUrl: './filter-tasks.component.css'
})
export class FilterTasksComponent {
  @Input() tasks!: Tasks[];

  
  listFilter : string = '1';

  selectedOption : boolean[] = [true, false, false];


  filters = [
    (task: Tasks)=>task,
    (task: Tasks)=>!task.isComplete,
    (task: Tasks)=>task.isComplete
  ]

  filterTasks(e : any){
    this.listFilter = e.target.value;
  }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() listFilter!: string;
  @Output() listFilterChange = new EventEmitter<string>();  

  selectedOption : boolean[] = [true, false, false];


  filterTasks(e : any){
    let selectedDefaults = [false, false, false];
    selectedDefaults[+e.target.value] = true;
    this.selectedOption = [...selectedDefaults]
    this.listFilter = e.target.value;
    this.listFilterChange.emit(this.listFilter);
  }
}

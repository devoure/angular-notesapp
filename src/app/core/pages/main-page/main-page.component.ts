import { Component } from '@angular/core';
import { AddTaskComponent } from '../../../features/add-task/add-task.component';
import { Tasks } from '../../../shared/models/tasks'

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    AddTaskComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  newTask : string = ''

  tasks : Tasks[] = [
    new Tasks('Learn Frontend'),
    new Tasks('Learn Ride a bike', true)
  ]
}

import { Component } from '@angular/core';
import { CommonModule} from '@angular/common'
import { RouterOutlet } from '@angular/router';

import { Tasks } from '../shared/models/tasks'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tasker';

  tasks = [
    // new Tasks('Learn Frontend'),
    // new Tasks('Learn Ride a bike', true)
  ]
}

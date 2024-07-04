import { RouterOutlet, Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: 'task', loadComponent: ()=> import('./components/add-task/add-task.component').then(component => component.AddTaskComponent) },
];

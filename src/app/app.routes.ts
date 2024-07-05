import { RouterOutlet, Routes, RouterModule } from '@angular/router';
import { provideRouter } from '@angular/router';

const routes: Routes = [
  { path: 'task', loadComponent: ()=> import('./core/pages/main-page/main-page.component').then(component => component.MainPageComponent) },
];

export const appConfig = {
  providers: [provideRouter(routes)]
};

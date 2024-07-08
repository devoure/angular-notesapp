import { RouterOutlet, Routes, RouterModule } from '@angular/router';
import { provideRouter } from '@angular/router';

const routes: Routes = [
  { path: 'tasks', loadComponent: ()=> import('./core/pages/main-page/main-page.component').then(component => component.MainPageComponent) },
  { path: '**', loadComponent: ()=> import('./core/pages/not-found-page/not-found-page.component').then(component => component.NotFoundPageComponent) }
];

export const appConfig = {
  providers: [provideRouter(routes)]
};

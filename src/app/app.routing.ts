import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { JobListComponent } from './job-list/job-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'job-list',
    component: JobListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

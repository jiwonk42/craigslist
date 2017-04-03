import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { JobComponent } from './job/job.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'job',
    component: JobComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
<<<<<<< HEAD

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
=======
import { routes } from './app.routes';  // Import your routing configuration

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),  // Provide routes if you're using routing
  ],
>>>>>>> To_Do_Task_app
};

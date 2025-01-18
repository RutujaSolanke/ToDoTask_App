import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // Import your routing configuration

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),  // Provide routes if you're using routing
  ],
};

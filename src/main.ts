import { bootstrapApplication } from '@angular/platform-browser';
<<<<<<< HEAD
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
=======
import { AppComponent } from './app/app.component'; // Import the standalone component

bootstrapApplication(AppComponent)  // Bootstrap AppComponent directly
  .catch((err) => console.error(err));  // Handle any errors
>>>>>>> To_Do_Task_app

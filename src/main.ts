import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Import the standalone component

bootstrapApplication(AppComponent)  // Bootstrap AppComponent directly
  .catch((err) => console.error(err));  // Handle any errors

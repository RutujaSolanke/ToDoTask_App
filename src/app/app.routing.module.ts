import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';  // Ensure this path is correct

const routes: Routes = [
  { path: '', component: DashboardComponent },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Use RouterModule for setting up routes
  exports: [RouterModule]  // Export RouterModule for use in other modules
})
export class AppRoutingModule { }

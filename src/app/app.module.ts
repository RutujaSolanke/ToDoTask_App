import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';  // Ensure AppRoutingModule is imported correctly
import { AppComponent } from './app.component';  // Import the standalone AppComponent

@NgModule({
  imports: [
    AppRoutingModule,  // Import AppRoutingModule for routing
    FormsModule,  // Import FormsModule for handling forms
    HttpClientModule,  // Import HttpClientModule for HTTP requests
    AppComponent,  // Import AppComponent as it is standalone
  ],
  providers: [],
  // Remove the bootstrap array since we will be using bootstrapApplication
})
export class AppModule { }

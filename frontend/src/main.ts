import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';  // Import HttpClient
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),   // Provide router for navigation
    provideHttpClient()      // Provide HttpClient for making HTTP requests
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';

// First, define appConfig
export const appConfig = {
  providers: [
    provideHttpClient(), // ✅ Make HttpClient available globally
    // You can add provideRouter(...) here if using routing
  ]
};

// Then bootstrap your app
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

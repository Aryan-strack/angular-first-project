import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';

const appConfig = {
  providers: [provideHttpClient()]
};

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

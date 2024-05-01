import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    { provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'primary' } },
  ],
};

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './tch.routes';

export const tchConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

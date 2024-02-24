import { bootstrapApplication } from '@angular/platform-browser';
import { tchConfig } from './tch/tch.config';
import { TchComponent } from './tch/tch.component';

bootstrapApplication(TchComponent, tchConfig)
  .catch((err) => console.error(err));

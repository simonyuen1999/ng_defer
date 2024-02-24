import { bootstrapApplication } from '@angular/platform-browser';
import { eftConfig } from './eft/eft.config';
import { EftComponent } from './eft/eft.component';

bootstrapApplication(EftComponent, eftConfig)
  .catch((err) => console.error(err));

import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { TchComponent } from '../../../tch/src/tch/tch.component';
import { EftComponent } from '../../../eft/src/eft/eft.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TchComponent, EftComponent],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PAMS Defer';

  // components = [ TchComponent ];
}

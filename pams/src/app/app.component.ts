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

  bShowEft = false;
  bShowTch = false;

  showTCH() {
    console.log('showTCH');
    if (this.bShowTch) { 
      document.querySelector('#tch-iframe')?.setAttribute('style', 'display: none');
    } else {
      document.querySelector('#tch-iframe')?.setAttribute('style', 'display: block');
    }
    this.bShowTch = !this.bShowTch;
  }

  showEFT() {
    console.log('showEFT');
    if (this.bShowEft) { 
      document.querySelector('#eft-iframe')?.setAttribute('style', 'display: none');
    } else {   
      document.querySelector('#eft-iframe')?.setAttribute('style', 'display: block');
    }
    this.bShowEft = !this.bShowEft;
  }

  // Test code for dynamically adding components
  components = [ TchComponent, EftComponent ];
}

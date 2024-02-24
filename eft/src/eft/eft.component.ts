import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'eft-root',
  standalone: true,
//imports: [RouterOutlet],
  templateUrl: './eft.component.html',
  styleUrl: './eft.component.css'
})
export class EftComponent {
  title = 'eft';
}

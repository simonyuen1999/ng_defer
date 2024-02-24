import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tch-root',
  standalone: true,
//imports: [RouterOutlet],
  templateUrl: './tch.component.html',
  styleUrl: './tch.component.css'
})
export class TchComponent {
  title = 'tch';
}

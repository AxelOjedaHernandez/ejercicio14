import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivasComponent } from './directivas/directivas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DirectivasComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio14 - @if - @for';
}

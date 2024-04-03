import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KalComponent } from './kal/kal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '4a_kalendarz';
}

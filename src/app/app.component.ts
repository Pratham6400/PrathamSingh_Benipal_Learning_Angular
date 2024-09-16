import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PrathamSingh-Benipal-Learning-Angular';
  name:string = "Pratham Singh Benipal";
  hobby: number = 175;
}

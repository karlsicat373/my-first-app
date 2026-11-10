
import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  name = 'Sicat, Erine Karl Gabriel D.';
  email = 'your.email@example.com';
  phone = 'Your Phone Number';

  clickCount = 0;

  skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Node.js'
  ];

  handleClick() {
    this.clickCount++;
  }

  printResume() {
    window.print();
  }

}

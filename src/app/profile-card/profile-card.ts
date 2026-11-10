
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {

  cardTitle = 'A Little About Me';

  description = 'I am a student who enjoys learning web development, exploring technology, and creating useful digital experiences.';

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      username: 'nature',
      content: 'Saw this awesome tree during my hike today.',
      imageUrl: 'assets/tree.jpeg',
    },
    {
      title: 'Snowy Mountain',
      username: 'mountain',
      content: "Here's a picture of a snowy mountain",
      imageUrl: 'assets/mountain.jpeg',
    },
    {
      title: 'Mountain Biking',
      username: 'biking',
      content: 'I did some biking today',
      imageUrl: 'assets/biking.jpeg',
    },
  ];
}

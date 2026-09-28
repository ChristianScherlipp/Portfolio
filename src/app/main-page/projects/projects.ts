import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  projects = [
    {name: "join", techStacks: ['CSS', 'HTML', 'Firebase', 'Angular', 'TypeScript'], github: '#', liveDemo: '#'},
    {name: "sharkie", techStacks: ['JavaScript', 'CSS', 'HTML'], github: 'https://github.com/ChristianScherlipp/Sharkie', liveDemo: 'https://christianscherlipp.developerakademie.net/Sharkie/index.html'},
    {name: "pokedex", techStacks: ['HTML', 'CSS', 'JavaScript', 'PokeAPI'], github: 'https://github.com/ChristianScherlipp/Pokedex', liveDemo: 'https://christianscherlipp.developerakademie.net/Pokedex/index.html'}
  ]
}

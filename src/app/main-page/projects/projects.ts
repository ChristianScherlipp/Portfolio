import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

interface Project {
  name: string;
  techStacks: string[];
  github: string;
  liveDemo: string;
  comingSoon?: boolean;
}

@Component({
  imports: [TranslatePipe, RouterLink],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  selectedProject: Project | null = null;
  
  projects: Project[] = [
    {name: "join", techStacks: ['CSS', 'HTML', 'Firebase', 'Angular', 'TypeScript'], github: '#', liveDemo: '#', comingSoon: true},
    {name: "sharkie", techStacks: ['JavaScript', 'CSS', 'HTML'], github: 'https://github.com/ChristianScherlipp/Sharkie', liveDemo: 'https://christianscherlipp.developerakademie.net/Sharkie/index.html'},
    {name: "pokedex", techStacks: ['HTML', 'CSS', 'JavaScript', 'PokeAPI'], github: 'https://github.com/ChristianScherlipp/Pokedex', liveDemo: 'https://christianscherlipp.developerakademie.net/Pokedex/index.html'}
  ]

  openPopup(project: Project): void {
    this.selectedProject = project;
  }

  @HostListener('document:keydown.escape')
  closePopup(): void {
    this.selectedProject = null;
  }
}

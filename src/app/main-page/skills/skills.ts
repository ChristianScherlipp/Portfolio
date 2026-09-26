import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
  skills = [
    {name: 'Angular', icon: 'angular', learned: true},
    {name: 'Bootstrap', icon: 'bootstrap', learned: true},
    {name: 'CSS', icon: 'css', learned: true},
    {name: 'Firebase', icon: 'firebase', learned: false},
    {name: 'Git', icon: 'git', learned: true},
    {name: 'HTML', icon: 'html5', learned: true},
    {name: 'JavaScript', icon: 'javascript', learned: true},
    {name: 'Material Design', icon: 'material-design', learned: false},
    {name: 'Php', icon: 'php', learned: false},
    {name: 'Python', icon: 'python', learned: false},
    {name: 'REST-API', icon: 'rest-api', learned: false},
    {name: 'Rust', icon: 'rust', learned: false},
    {name: 'Sass', icon: 'sass', learned: true},
    {name: 'Scrum', icon: 'scrum', learned: false},
    {name: 'TypeScript', icon: 'typescript', learned: true},
    {name: 'Wordpress', icon: 'wordpress', learned: false},
  ]

  // Teilt die Skills gleichmaessig auf 3 Reihen fuer die Laufband-Animation auf
  get rows() {
    const size = Math.ceil(this.skills.length / 2);
    return [
      this.skills.slice(0, size),
      this.skills.slice(size, size * 2)
    ]
  }
}

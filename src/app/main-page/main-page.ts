import { Component } from '@angular/core';
import { AboutMe } from './about-me/about-me';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';

@Component({
  imports: [AboutMe, Skills, Projects, Contact],
  selector: 'app-main-page',
  styleUrl: './main-page.scss',
  templateUrl: './main-page.html',
})
export class MainPage {}

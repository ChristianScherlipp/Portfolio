import { Component } from '@angular/core';
import { Hero } from './hero/hero';

@Component({
  imports: [Hero],
  selector: 'app-landing-page',
  styleUrl: './landing-page.scss',
  templateUrl: './landing-page.html',
})
export class LandingPage {}

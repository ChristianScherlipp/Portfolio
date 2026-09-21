import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';

@Component({
  imports: [Navbar, Hero],
  selector: 'app-landing-page',
  styleUrl: './landing-page.scss',
  templateUrl: './landing-page.html',
})
export class LandingPage {}

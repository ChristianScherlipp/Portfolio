import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { MainPage } from './main-page/main-page';
import { Footer } from './footer/footer';

@Component({
  imports: [RouterOutlet, LandingPage, MainPage, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Portfolio');
}

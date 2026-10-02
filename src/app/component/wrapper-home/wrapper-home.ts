import { Component } from '@angular/core';
import { LandingPage } from '../../landing-page/landing-page';
import { MainPage } from '../../main-page/main-page';

@Component({
  imports: [LandingPage, MainPage],
  selector: 'app-wrapper-home',
  styleUrl: './wrapper-home.scss',
  templateUrl: './wrapper-home.html',
})
export class WrapperHome {}

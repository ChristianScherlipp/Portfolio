import { Component, inject } from '@angular/core';
import { LanguageService } from '../../shared/language';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  languageService = inject(LanguageService);
}

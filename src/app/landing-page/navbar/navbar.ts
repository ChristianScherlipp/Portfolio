import { Component, inject } from '@angular/core';
import { Language, LanguageService } from '../../shared/language';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  languageService = inject(LanguageService);

  changeLanguage(language: Language) {
    this.languageService.changeLanguage(language);
  }
}

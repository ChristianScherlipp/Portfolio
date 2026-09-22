import { Injectable, signal } from '@angular/core';

export type Language = 'de' | 'en';

export interface Translations {
  navbar: {
    aboutMe: string;
    skills: string;
    myProjects: string;
    contact: string;
  };
}

const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    navbar: {
      aboutMe: 'About me',
      skills: 'Skills',
      myProjects: 'Projects',
      contact: 'Contact',
    },
  },
  de: {
    navbar: {
      aboutMe: 'Über mich',
      skills: 'Kenntnisse',
      myProjects: 'Projekte',
      contact: 'Kontakt',
    },
  },
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLanguage = signal<Language>('en');

  translations = signal<Translations>(TRANSLATIONS['en']);

  changeLanguage(language: Language) {
    this.currentLanguage.set(language);
    this.translations.set(TRANSLATIONS[language]);
  }
}

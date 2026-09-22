import { Injectable, signal } from '@angular/core';

export type Language = 'de' | 'en';

export interface Translations {
  navbar: {
    aboutMe: string;
    skills: string;
    myProjects: string;
    contact: string;
  };
  hero: {
    iAm: string;
    role: string;
    tagline: string;
    talkButton: string;
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
    hero: {
      iAm: 'I AM',
      role: 'FULLSTACK DEVELOPER',
      tagline: 'Turning ideas into interactive web experiences.',
      talkButton: "Let's talk!",
    },
  },
  de: {
    navbar: {
      aboutMe: 'Über mich',
      skills: 'Kenntnisse',
      myProjects: 'Projekte',
      contact: 'Kontakt',
    },
    hero: {
      iAm: 'ICH BIN',
      role: 'FULLSTACK DEVELOPER',
      tagline: 'Ich verwandle Ideen in interaktive Web-Erlebnisse um.',
      talkButton: 'Lass uns reden!',
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

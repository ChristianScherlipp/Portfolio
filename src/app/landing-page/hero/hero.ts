import { Component, ElementRef, inject } from '@angular/core';
import { LanguageService } from '../../shared/language';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  languageService = inject(LanguageService);
  private hostElement = inject(ElementRef<HTMLElement>);

  scrollToNext(): void {
    const nextSection = this.hostElement.nativeElement.nextElementSibling as HTMLElement | null;

    if (nextSection) {
      nextSection.scrollIntoView({behavior: 'smooth', block: 'start'});
    }else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth'});
    }
  }
}

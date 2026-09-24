import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-about-me',
  styleUrl: './about-me.scss',
  templateUrl: './about-me.html',
})
export class AboutMe {
  translate = inject(TranslateService);
  showMore = false;
  @ViewChild('pathRef') pathRef!: ElementRef<HTMLElement>;

  changeLanguage(language: 'de' | 'en') {
    this.translate.use(language);
  }

  revealMore(): void {
    
    this.showMore = true;

    // Nach dem naechsten Render-Tick nur bis zum Anfang von pathTagLine
    // scrollen, nicht bis ganz ans Ende (hobbyTagLine bleibt manuell erreichbar).
    setTimeout(() => {
      this.pathRef?.nativeElement?.scrollIntoView({behavior: 'smooth', block: 'start'})
    });
  }
}

import { Component, ElementRef, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe, RouterLink],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  private hostElement = inject(ElementRef<HTMLElement>);
  private router = inject(Router)

  scrollToNext(): void {
    const nextSection = this.hostElement.nativeElement.nextElementSibling as HTMLElement | null;

    if (nextSection) {
      nextSection.scrollIntoView({behavior: 'smooth', block: 'start'});
    }else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth'});
    }
  }

  navigateToContact(): void {
    this.router.navigate(['/'], { fragment: 'contact' });
  }
}

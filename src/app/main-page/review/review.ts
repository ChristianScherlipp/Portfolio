import { Component, computed, inject, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

interface Testimonial {
  quote: string;
  author: string;
}

@Component({
  imports: [TranslatePipe],
  selector: 'app-review',
  styleUrl: './review.scss',
  templateUrl: './review.html',
})
export class Review {
  private translate = inject(TranslateService);

  activeIndex = signal(0);

  testimonials = computed(() => {
    this.translate.currentLang();
    return this.translate.instant('review.testimonials') as Testimonial[];
  });

  prevIndex = computed(() => {
    const length = this.testimonials().length;
    return (this.activeIndex() - 1 + length) % length;
  });

  nextIndex = computed(() => {
    const length = this.testimonials().length;
    return (this.activeIndex() + 1) % length;
  });

  prev(): void {
    const length = this.testimonials().length;
    this.activeIndex.set((this.activeIndex() - 1 + length) % length)
  }

  next(): void {
    const length = this.testimonials().length;
    this.activeIndex.set((this.activeIndex() + 1) % length)
  }

  goTo(index: number): void {
    this.activeIndex.set(index)
  }
}

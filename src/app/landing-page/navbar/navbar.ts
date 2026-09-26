import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';


@Component({
  imports: [TranslatePipe, RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  translate = inject(TranslateService);

  changeLanguage(language: 'de' | 'en') {
    this.translate.use(language);
  }
}

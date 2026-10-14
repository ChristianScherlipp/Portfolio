import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideAppInitializer, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

// Startsprache: Deutsch, wenn die bevorzugte Browsersprache Deutsch ist (de, de-DE, de-AT, ...), sonst Englisch
const browserLanguage = (typeof navigator !== 'undefined' && (navigator.languages?.[0] ?? navigator.language)) || 'en';
const startLanguage = browserLanguage.toLowerCase().startsWith('de') ? 'de' : 'en';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'})),
    provideAppInitializer(() => {
      inject(ViewportScroller).setOffset(() => [0, window.innerWidth <= 900 ? 80 : 112]);
    }),
    provideHttpClient(),
    provideTranslateService({
      lang: startLanguage,
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        prefix: '/i18n/',
        suffix: '.json'
      })
    }),
  ]
};

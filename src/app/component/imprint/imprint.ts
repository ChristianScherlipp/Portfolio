import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-imprint',
  styleUrl: './imprint.scss',
  templateUrl: './imprint.html',
})
export class Imprint {
  data = {
    name: 'Christian Scherlipp',
    street: '[Albert-Buchmann-str. 28]',
    zipCity: '[16515 Oranienburg]',
    country: 'Deutschland',
    email: '[c.scherlipp@web.de]',
    phone: '',
    vatId: '',
  }
}

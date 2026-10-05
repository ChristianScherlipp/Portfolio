import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe, RouterLink],
  selector: 'app-imprint',
  styleUrl: './imprint.scss',
  templateUrl: './imprint.html',
})
export class Imprint {
  data = {
    name: 'Christian Scherlipp',
    street: 'Albert-Buchmann-str. 28',
    zipCity: '16515 Oranienburg',
    country: 'Deutschland',
    email: 'c.scherlipp@web.de',
    phone: '',
    vatId: '',
  }
}

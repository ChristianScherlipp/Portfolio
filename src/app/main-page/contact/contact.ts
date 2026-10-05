import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [ReactiveFormsModule, TranslatePipe],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  private fb = inject(NonNullableFormBuilder);
  private http = inject(HttpClient);
  submitted = signal(false);
  sending = signal(false);
  sendError = signal(false);

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern(/\.(de|com|at)$/i)]],
    message: ['', [Validators.required, Validators.minLength(20)]],
    privacy: [false, Validators.requiredTrue]
  });

  onSubmit(): void {
    if (this.contactForm.invalid || this.sending()) return;

    const {name, email, message} = this.contactForm.getRawValue();
    this.sending.set(true);
    this.sendError.set(false);
    this.submitted.set(false);

    this.http.post<{success: Boolean}>('contact_form_mail.php', {name, email, message}).subscribe({
      next: () => {
        this.contactForm.reset();
        this.submitted.set(true);
        this.sending.set(false);
      },
      error: () => {
        this.sendError.set(true);
        this.sending.set(false);
      },
    });
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h1>Contact</h1>
    <p class="muted">Submissions are POSTed to <code>/api/contact</code>.</p>

    <form #f="ngForm" (ngSubmit)="submit(f)" class="card" style="max-width: 520px;">
      <label>
        Name
        <input type="text" name="name" [(ngModel)]="model.name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" [(ngModel)]="model.email" required />
      </label>
      <label>
        Message
        <textarea name="message" rows="5" [(ngModel)]="model.message" required></textarea>
      </label>

      <button type="submit" class="btn" [disabled]="f.invalid || sending">
        {{ sending ? 'Sending…' : 'Send' }}
      </button>

      <p *ngIf="sent" class="muted" style="color: #2f855a; margin-top: 0.75rem;">
        Thanks — your message was received.
      </p>
      <p *ngIf="error" class="muted" style="color: #c53030; margin-top: 0.75rem;">
        {{ error }}
      </p>
    </form>
  `,
  styles: [`
    label { display: block; margin-bottom: 1rem; font-weight: 500; }
    input, textarea {
      display: block;
      width: 100%;
      padding: 0.5rem 0.75rem;
      margin-top: 0.25rem;
      border: 1px solid var(--border);
      border-radius: 4px;
      font-family: inherit;
      font-size: 1rem;
    }
  `],
})
export class ContactComponent {
  private http = inject(HttpClient);

  model = { name: '', email: '', message: '' };
  sending = false;
  sent = false;
  error: string | null = null;

  submit(form: NgForm): void {
    if (form.invalid) return;
    this.sending = true;
    this.error = null;
    this.http.post('/api/contact', this.model).subscribe({
      next: () => {
        this.sending = false;
        this.sent = true;
        form.resetForm();
      },
      error: (err) => {
        this.sending = false;
        this.error = err?.error?.message ?? 'Could not send. Try again shortly.';
      },
    });
  }
}

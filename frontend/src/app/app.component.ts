import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <div class="container nav">
        <a routerLink="/" class="brand">CBW</a>
        <nav>
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
          <a routerLink="/about" routerLinkActive="active">About</a>
          <a routerLink="/blog" routerLinkActive="active">Blog</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
        </nav>
      </div>
    </header>

    <main class="container" style="padding: 2rem 1.5rem;">
      <router-outlet />
    </main>

    <footer class="site-footer">
      <div class="container">
        <p class="muted">&copy; {{ year }} Client Business Website demo &middot; Spring Boot + Angular + PostgreSQL</p>
      </div>
    </footer>
  `,
  styles: [`
    .site-header {
      background: white;
      border-bottom: 1px solid var(--border);
      position: sticky;
      top: 0;
      z-index: 10;
    }
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 1.5rem;
    }
    .brand {
      font-weight: 700;
      font-size: 1.25rem;
      color: var(--primary);
    }
    nav a {
      margin-left: 1.5rem;
      color: var(--muted);
      font-weight: 500;
    }
    nav a.active {
      color: var(--primary);
    }
    .site-footer {
      border-top: 1px solid var(--border);
      padding: 2rem 0;
      margin-top: 4rem;
      text-align: center;
    }
  `],
})
export class AppComponent {
  year = new Date().getFullYear();
}

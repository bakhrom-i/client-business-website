import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <h1>Marketing site, fully wired.</h1>
      <p class="muted">
        A demo of a small business website with a Spring Boot REST API, Angular 17 frontend,
        PostgreSQL persistence, and a contact form that hits a backend on Render.
      </p>
      <p>
        <a routerLink="/blog" class="btn">Read the blog</a>
        &nbsp;
        <a routerLink="/contact">Or get in touch &rarr;</a>
      </p>
    </section>

    <section class="features">
      <div class="card">
        <h3>Spring Boot 3</h3>
        <p class="muted">REST API exposing posts and contact submissions, backed by Spring Data JPA.</p>
      </div>
      <div class="card">
        <h3>Angular 17</h3>
        <p class="muted">Standalone components, lazy-loaded routes, typed HTTP services.</p>
      </div>
      <div class="card">
        <h3>PostgreSQL on Render</h3>
        <p class="muted">Free-tier managed Postgres provisioned via Render Blueprint.</p>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 3rem 0;
      text-align: center;
      max-width: 720px;
      margin: 0 auto;
    }
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1rem;
      margin-top: 2rem;
    }
  `],
})
export class HomeComponent {}

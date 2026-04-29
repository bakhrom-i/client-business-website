import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h1>About</h1>
    <p>
      This site demonstrates a small full-stack web app: a Spring Boot REST API,
      an Angular 17 SPA, and a PostgreSQL database — deployed on free-tier infrastructure.
    </p>
    <h2>Stack</h2>
    <ul>
      <li><strong>Backend:</strong> Java 17, Spring Boot 3, Spring Data JPA, Maven</li>
      <li><strong>Database:</strong> PostgreSQL 15 (managed by Render)</li>
      <li><strong>Frontend:</strong> Angular 17, TypeScript 5, RxJS</li>
      <li><strong>Hosting:</strong> Backend on Render (Docker), frontend on Vercel</li>
      <li><strong>CI:</strong> GitHub Actions builds &amp; tests on every push</li>
    </ul>
  `,
})
export class AboutComponent {}

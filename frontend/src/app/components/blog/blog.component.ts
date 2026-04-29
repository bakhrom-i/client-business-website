import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { PostService, Post } from '../../services/post.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h1>Blog</h1>
    <p class="muted">Posts served from <code>/api/posts</code> on the Spring Boot backend.</p>

    <div *ngIf="loading">Loading posts...</div>
    <div *ngIf="error" class="card" style="border-color: #fc8181;">
      <strong>Couldn't load posts.</strong>
      <p class="muted">{{ error }}</p>
      <p class="muted">If the backend is sleeping (free tier), give it ~30 seconds to wake up and refresh.</p>
    </div>

    <article *ngFor="let p of posts" class="card">
      <h3>{{ p.title }}</h3>
      <p class="muted">{{ p.publishedAt | date:'mediumDate' }}</p>
      <p>{{ p.content }}</p>
    </article>

    <div *ngIf="!loading && !error && posts.length === 0" class="card">
      <p>No posts yet. Be the first one to seed the database.</p>
    </div>
  `,
})
export class BlogComponent implements OnInit {
  private postService = inject(PostService);

  posts: Post[] = [];
  loading = true;
  error: string | null = null;

  ngOnInit(): void {
    this.postService.list().subscribe({
      next: (posts) => {
        this.posts = posts;
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.message ?? 'Network error';
        this.loading = false;
      },
    });
  }
}

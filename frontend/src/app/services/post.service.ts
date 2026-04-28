import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
  publishedAt: string;
}

@Injectable({ providedIn: 'root' })
export class PostService {
  private base = '/api/posts';

  constructor(private http: HttpClient) {}

  list(): Observable<Post[]> {
    return this.http.get<Post[]>(this.base);
  }

  bySlug(slug: string): Observable<Post> {
    return this.http.get<Post>(`${this.base}/${slug}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Post, PostCreateInput } from '../data/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = `${environment.apiUrl}/v1/posts`;

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.postsUrl}/${id}`);
  }

  createPost(post: PostCreateInput): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post);
  }
}

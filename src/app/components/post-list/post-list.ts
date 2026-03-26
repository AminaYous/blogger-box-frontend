import { Component, OnInit } from '@angular/core';
import { Post } from '../../data/post';
import { PostService } from '../../services/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.html',
  styleUrls: ['./post-list.css']
})
export class PostList implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getAllPosts();
  }
}

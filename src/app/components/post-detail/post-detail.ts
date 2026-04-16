import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../data/post';
import { PostService } from '../../services/post';

@Component({
  selector: 'app-post-detail',
  standalone: false,
  templateUrl: './post-detail.html',
  styleUrls: ['./post-detail.css']
})
export class PostDetail implements OnInit {
  post$!: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.post$ = this.postService.getPostById(id);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}

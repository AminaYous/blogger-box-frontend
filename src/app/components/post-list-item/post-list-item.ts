import { Component, Input } from '@angular/core';
import { Post } from '../../data/post';

@Component({
  selector: 'app-post-list-item',
  standalone: false,
  templateUrl: './post-list-item.html',
  styleUrls: ['./post-list-item.css']
})
export class PostListItem {
  @Input() post!: Post;
}

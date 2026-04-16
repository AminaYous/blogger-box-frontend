import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Category } from '../../data/category';
import { CategoryService } from '../../services/category';
import { PostService } from '../../services/post';

@Component({
  selector: 'app-post-create',
  standalone: false,
  templateUrl: './post-create.html',
  styleUrls: ['./post-create.css']
})
export class PostCreate implements OnInit {
  postForm!: FormGroup;
  categories$!: Observable<Category[]>;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      content: ['', [Validators.required, Validators.maxLength(2500)]],
      categoryId: ['', Validators.required]
    });

    this.categories$ = this.categoryService.getAll();
  }

  get f() {
    return this.postForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.postForm.invalid) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: 'Please review your post',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });
      return;
    }

    this.postService.createPost(this.postForm.value).subscribe({
      next: () => {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Post Submitted Successfully',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        });
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Erreur lors de la création du post', err);
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: 'Please review your post',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        });
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}

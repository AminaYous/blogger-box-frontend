import { Category } from './category';

export interface Post {
  id: string;
  title: string;
  content: string;
  createdDate: string;
  category: Category;
}

export type PostCreateInput = Omit<Post, 'id' | 'createdDate' | 'category'> & { categoryId: string };

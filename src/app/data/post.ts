import { Category } from './category';

export interface Post {
  id: string;
  title: string;
  content: string;
  created_date: string;
  category_id: string;
  category?: Category;
}

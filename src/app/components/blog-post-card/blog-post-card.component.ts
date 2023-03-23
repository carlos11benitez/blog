import { Component, Input } from '@angular/core';

interface Post {
  postUrl: string;
  img: string;
  title: string;
  categoryUrl: string;
  category: string;
  likes: number;
}

@Component({
  selector: 'app-blog-post-card',
  templateUrl: './blog-post-card.component.html',
  styleUrls: ['./blog-post-card.component.css']
})
export class BlogPostCardComponent {

  @Input('content') content!: Post

}

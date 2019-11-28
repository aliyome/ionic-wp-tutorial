import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  ID: number;
  post: Post = {
    ID: null,
    title: null,
    content: null,
    date: null,
  };

  constructor(
    private readonly route: ActivatedRoute,
    private readonly wordpress: WordpressService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.ID = parseInt(params.get('articleId'), 10);
    });
  }

  ionViewDidEnter() {
    this.wordpress.getArticle(this.ID).subscribe(data => {
      this.post = data;
    });
  }
}

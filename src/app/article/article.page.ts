import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';

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
    private readonly http: HttpClient,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.ID = parseInt(params.get('articleId'), 10);
    });
  }

  ionViewDidEnter() {
    this.http
      .get<Post>(
        'https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/' +
          this.ID,
      )
      .subscribe(data => {
        this.post = data;
      });
  }
}

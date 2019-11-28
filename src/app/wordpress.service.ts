import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root',
})
export class WordpressService {
  constructor(private readonly http: HttpClient) {}

  getPosts() {
    return this.http.get(
      'http://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/',
    );
  }

  getArticle(id: number) {
    return this.http.get<Post>(
      'https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/' +
        id,
    );
  }
}

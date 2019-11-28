import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts: {
    ID: number;
    title: string;
    content: string;
    date: string;
  }[] = [];
  constructor(private readonly http: HttpClient) {}

  ionViewDidEnter() {
    this.http
      .get(
        'http://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/',
      )
      .subscribe(data => {
        this.posts = data['posts'];
      });
  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { Post } from '../models/post';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts: Post[] = [];

  constructor(
    private readonly http: HttpClient,
    private readonly loadingController: LoadingController,
  ) {}

  async ionViewDidEnter() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });
    if (!this.posts.length) {
      await loading.present();
    }

    this.http
      .get(
        'http://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/',
      )
      .subscribe(data => {
        this.posts = data['posts'];
        loading.dismiss();
      });
  }

  trackByFn(index: number, item: Post): number {
    return item.ID;
  }
}

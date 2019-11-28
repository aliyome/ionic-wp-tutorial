import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Post } from '../models/post';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts: Post[] = [];

  constructor(
    private readonly wordpress: WordpressService,
    private readonly loadingController: LoadingController,
  ) {}

  async ionViewDidEnter() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });
    if (!this.posts.length) {
      await loading.present();
    }

    this.wordpress.getPosts().subscribe(data => {
      this.posts = data['posts'];
      loading.dismiss();
    });
  }

  trackByFn(index: number, item: Post): number {
    return item.ID;
  }
}

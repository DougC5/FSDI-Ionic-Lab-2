import { Component } from '@angular/core';
import { Post } from '../post';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  postContent = '';
  postURL = '';

  constructor(private dataSrv: DataService) {

  }
  createPost() {
    console.log('create button clicked', this.postContent);

    let p = new Post();
    p.content = this.postContent;
    p.imageUrl = this.postURL;
    console.log(p);
    this.dataSrv.addPosts(p);
        this.postContent = '';
        this.postURL = '';
  }

  getPost() {
    return this.dataSrv.getPosts();
  }

}

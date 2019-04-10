import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public posts = [];

  constructor() { }

  public addPosts(post: Post) {
    console.log('inside add posts data service');
    this.posts.push(post);
    console.log('DataService Posts Array ', this.posts);

  }
  public getPosts() {
    return this.posts;
  }
}

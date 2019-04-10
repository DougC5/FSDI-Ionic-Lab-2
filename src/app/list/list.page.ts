import { Post } from './../post';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  listOfPosts: Post[] = [];

  ngOnInit() {
  }

constructor(private dataSrv: DataService) {
  this.listOfPosts = this.dataSrv.getPosts();
  console.log('List of posts array ', this);
}
}

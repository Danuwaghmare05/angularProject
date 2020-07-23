import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-http-posts',
  templateUrl: './http-posts.component.html',
})
export class HttpPostsComponent implements OnInit {
  posts;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPost().subscribe(
      (res) => {
        console.log(' res : ', res.json());
        // console.trace()
        this.posts = res.json();
      },
      (error) => {
        alert('some error from server...');
        console.log('HttpPostsComponent -> ngOnInit -> error', error);
      }
    );
  }

  //For Create Post
  createPost(newTitle: HTMLInputElement) {
    console.clear();
    console.log('newTitle : ', newTitle);

    let post = { title: newTitle.value };

    this.apiService
      .sendPost(JSON.stringify({ title: newTitle.value }))
      .subscribe((res) => {
        console.log('res : ', res.json());
        let title = res.json().title;
        let id = res.json().id;
        // this.posts.push({ id, title });

        this.posts.splice(0, 0, { id, title });
      });
  }

  //For Update Post
  updatePost(post) {
    console.clear();
    console.log(' post : ', post);

    let obj = {
      id: 1,
      userId: 10,
      title: 'updated data',
      body: 'some text',
    };
    // .put(this.url + '/' + post.id, obj)

    let myData = JSON.stringify(obj);
    this.apiService
      .putPost(post.id, { title: 'updated data' })
      .subscribe((res) => {
        console.log('res', res.json());

        let index = this.posts.indexOf(post);
        console.log('HttpPostsComponent -> updatePost -> index', index);

        let updatedPost = {
          id: res.json().id,
          title: res.json().title,
          // userId: res.json().userId,
          // body: res.json().body,
        };
        this.posts.splice(index, 1, updatedPost);
      });
  }

  //For Delete Post
  deletePost(post) {
    console.clear();
    console.log('deletePost -> post', post);

    this.apiService.deletePost(post.id).subscribe(
      (res) => {
        console.log('%c deletePost -> res' + res, 'color:blue');
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error) => {
        console.log('deletePost -> error', error);
        console.log(' %c error' + error, 'color:red');
      }
    );
  }
}

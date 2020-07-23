import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {}

  //For Get Post
  getPost() {
    return this.http.get(this.url);
  }

  //For Create post
  sendPost(post) {
    return this.http.post(this.url, post);
  }

  //For Update Post
  putPost(postId, myData) {
    console.log('ApiService -> putPost -> myData', myData);
    return this.http.put(this.url + '/' + postId, myData);
  }

  //For Delete Post
  deletePost(postId) {
    console.log(
      '%c ApiService -> deletePost -> postId' + postId,
      'clolr:green'
    );
    return this.http.delete(this.url + '/' + 6777);
  }
}

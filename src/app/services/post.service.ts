import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  Api_url: string;

  constructor(private http: HttpClient) {
    this.Api_url = 'https://jsonplaceholder.typicode.com/posts';
   }

   getPosts() {
    return this.http.get<any[]>(this.Api_url);  
   }

   getPostsByUserId(userId: number) : any {
    return this.http.get<any[]>(`${this.Api_url}?userId=${userId}`);  
   }

   getPostById(postId: number): any {
    return this.http.get<any[]>(`${this.Api_url}/${postId}`);
   }
}

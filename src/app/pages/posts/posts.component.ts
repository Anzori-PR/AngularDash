import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  imports: [NgFor, NgIf],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: any = [];
  users: any = [];
  postAndUser: any = [];
  id: number = 0;

  selectedPost: any = [];
  showPostDetails: boolean = false;

  constructor(private postService: PostService, private userService: UserService, private routerURL : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.routerURL.snapshot.paramMap.get('id'));

    this.userService.getUsers().subscribe(users => {
      this.postService.getPosts().subscribe(posts => {
        this.postAndUser = posts.map(post => {
          const user = users.find(user => user.id === post.userId);
          return {
            username: user ? user.username : 'Unknown',
            title: post.title,
            postId: post.id,
          };
        });
      });
    });


    this.postService.getPostsByUserId(this.id).subscribe((posts: any) => {
      this.posts = posts;
    }, (error: any) => {
      console.error('Error fetching posts:', error);
    });
  }

  postDetails(detailPostId: number): void {
    this.showPostDetails = true;

    this.postService.getPostById(detailPostId).subscribe((posts: any) => {
      this.selectedPost = posts; 
    }, (error: any) => { 
      console.error('Error fetching post details:', error);
    });
  }

  closePostDetails(): void {
    this.showPostDetails = false;
    this.selectedPost = [];
  }

}

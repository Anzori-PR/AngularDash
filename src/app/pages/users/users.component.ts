import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})


export class UsersComponent implements OnInit {
  users: any = [];
  filtered: any = [];
  searchText: string = '';

  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.filtered = data; // Store the original list for filtering
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }

  goToPosts(userId: number): void {
    window.location.href = `/posts/${userId}`;
  }

  toDoList(userId: number): void {
    window.location.href = `/todolist/${userId}`;
  }

  filteredUsers() {
    if (this.searchText === '') {
      this.filtered = this.users;
    } else {
      this.filtered = this.users.filter((p: { name: string; email: string; }) =>
        p.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        p.email.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

}

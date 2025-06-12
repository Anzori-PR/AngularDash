import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { TodolistComponent } from './pages/todolist/todolist.component';

export const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: UsersComponent},
    { path: 'posts', component: PostsComponent },
    { path: 'posts/:id', component: PostsComponent },
    { path: 'todolist/:id', component: TodolistComponent },
    
];

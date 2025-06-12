import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todolist',
  imports: [NgFor],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit{
  id: number = 0;
  todos: any = [];

  constructor(private todoservice: TodosService, private routerUrl: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.routerUrl.snapshot.paramMap.get('id'));

    this.todoservice.getTodosById(this.id).subscribe((todos: any) => {
      this.todos = todos;
    }, (error: any) => {
      console.error('Error fetching todos:', error);
    });
  }

}

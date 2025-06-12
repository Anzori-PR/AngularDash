import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todosUrl: string;

  constructor(private http : HttpClient) {
    this.todosUrl = 'https://jsonplaceholder.typicode.com/todos';
   }

  getTodosById(userId: number): any {
    return this.http.get<any>(`${this.todosUrl}?userId=${userId}`);
  }
}

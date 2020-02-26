import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  data: Todo[] = [];
  constructor(private todoService: ArticleService) { }

  ngOnInit() {
    this.todoService.fetchAllArticles().subscribe(res => {
      this.data = res;
    }, err => {
      console.error(err);
    });
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';


const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    data: { title: 'List of Todos' }
  },
  {
    path: 'todo/add',
    component: TodoAddComponent,
    data: { title: 'Add Todo' }
  },
  {
    path: 'todo/edit/:id',
    component: TodoEditComponent,
    data: { title: 'Edit Todo' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

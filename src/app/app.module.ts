import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TodoComponent } from './todo/todo.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, TodoComponent, TodoAddComponent, TodoEditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import{ArticleComponent}from './article.component';
import { HelloComponent } from "./hello.component";
import { TestData } from "./models/test-data";
import { TodoComponent } from "./todo/todo.component";
import { TodoAddComponent } from "./todo-add/todo-add.component";
import { TodoEditComponent } from "./todo-edit/todo-edit.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(TestData)
  ],
  declarations: [
    AppComponent,
    ArticleComponent,
    HelloComponent,
    TodoComponent,
    TodoAddComponent,
    TodoEditComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

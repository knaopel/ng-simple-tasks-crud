import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { ArticleService } from "./article.service";
import { Article } from "./models/article";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  // Component Properties
  allArticles: Article[];
  statusCode: number;
  requestProcessing = false;
  articleIdToUpdate = null;
  processValidation = false;

  // Create Form
  articleForm = new FormGroup({
    title: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required)
  });

  // Create constructor and inject ArticleService
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles() {
    this.articleService
      .fetchAllArticles()
      .subscribe(
        data => (this.allArticles = data),
        errorCode => (this.statusCode = errorCode)
      );
  }
}

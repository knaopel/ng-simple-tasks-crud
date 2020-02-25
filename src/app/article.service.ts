import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

import { Article } from "./models/article";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  createArticle(article: Article): Observable<number> {
    let httpHeaders = new HttpHeaders({});
    return this.http.post<Article>('' + article.id,article,{
      headers: httpHeaders,
      observe:'response'
    }).pipe(
      map(res =>res.status),
      catchError(null)
    );
  }
}

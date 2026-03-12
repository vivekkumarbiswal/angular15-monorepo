import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}
  getComments(page: number, limit: number) {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`,
    );
  }
}

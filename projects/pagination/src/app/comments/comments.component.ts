import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent implements OnInit {
  comments$ = new BehaviorSubject<any[]>([]);

  page = 1;
  limit = 10;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('component loaded');
    this.loadComments();
  }
  loadComments() {
    const url = `https://jsonplaceholder.typicode.com/comments?_page=${this.page}&_limit=${this.limit}`;

    this.http.get<any[]>(url).subscribe((data) => {
      console.log(data);
      // this.comments = data;
      this.comments$.next(data);
    });
  }
  nextPage() {
    this.page++;
    this.loadComments();
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadComments();
    }
  }
}

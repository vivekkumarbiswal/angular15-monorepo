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

  isLoading = false;
  allLoaded = false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadComments();
  }
  loadComments() {
    if (this.isLoading || this.allLoaded) return;

    this.isLoading = true;

    const url = `https://jsonplaceholder.typicode.com/comments?_page=${this.page}&_limit=${this.limit}`;

    this.http.get<any[]>(url).subscribe((data) => {
      // console.log(data);
      // this.comments = data;
      // this.comments$.next(data);
      const current = this.comments$.value;
      this.comments$.next([...current, ...data]);

      if (data.length < this.limit) {
        this.allLoaded = true;
      }
      this.isLoading = false;
    });
  }
  // nextPage() {
  //   this.page++;
  //   this.loadComments();
  // }

  // prevPage() {
  //   if (this.page > 1) {
  //     this.page--;
  //     this.loadComments();
  //   }
  // }

  loadMore() {
    this.page++;
    this.loadComments();
  }

  //detect scroll
  // @HostListener('window:scroll', [])

  // onScroll() {
  //   const scrollPosition = window.innerHeight + window.scrollY;
  //   const pageHeight = document.body.offsetHeight;

  //   if (scrollPosition >= pageHeight - 200) {
  //     this.loadMore();
  //   }
  // }

  onScroll(index: number) {
    const total = this.comments$.value.length;

    if (index > total - 10) {
      this.loadMore();
    }
  }
  trackById(index: number, item: any) {
    return item.id;
  }
}

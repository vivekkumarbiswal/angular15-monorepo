import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTableComponent {
  comments$ = new BehaviorSubject<any[]>([]);
  page = 1;
  limit = 20;
  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.loadComments();
  }

  loadComments() {
    this.commentService
      .getComments(this.page, this.limit)
      .subscribe((data: any) => {
        const current = this.comments$.value;
        this.comments$.next([...current, ...data]);
      });
  }
  loadMore() {
    this.page++;
    this.loadComments();
  }
  trackById(index: number, item: any) {
    return item.id;
  }

  onScroll(index: number) {
    const total = this.comments$.value.length;
    if (index > total - 10) {
      this.loadMore();
    }
  }
}

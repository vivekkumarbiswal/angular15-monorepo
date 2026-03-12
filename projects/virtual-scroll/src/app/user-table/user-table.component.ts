import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Common {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTableComponent {
  constructor(private http: HttpClient) {}

  comments$ = this.http.get<Common[]>(
    'https://jsonplaceholder.typicode.com/comments',
  );

  trackById(index: number, item: Common) {
    return item.id;
  }
}

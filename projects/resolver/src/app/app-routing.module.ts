import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostResolver } from './post.resolver';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: 'post',
    component: PostComponent,
    resolve: { data: PostResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

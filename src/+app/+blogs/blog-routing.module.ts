import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlogListComponent } from './blog.list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'blogs', component: BlogListComponent }
    ])
  ]
})
export class BlogListRoutingModule { }
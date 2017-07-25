import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlogListComponent } from './blog.list.component';
import { BlogViewComponent } from './blog.view.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'blogs', component: BlogListComponent },
      { path: 'blogs/:name', component: BlogViewComponent}
    ])
  ]
})
export class BlogRoutingModule { }
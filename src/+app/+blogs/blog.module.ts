import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BlogListComponent } from './blog.list.component';
import { BlogListRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    SharedModule,
    BlogListRoutingModule
  ],
  declarations: [
    BlogListComponent
  ]
})
export class BlogModule { }
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BlogListComponent } from './blog.list.component';
import { BlogViewComponent } from './blog.view.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    SharedModule,
    BlogRoutingModule
  ],
  declarations: [
    BlogListComponent,
    BlogViewComponent
  ]
})
export class BlogModule { }
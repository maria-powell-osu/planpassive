import { NgModule } from '@angular/core';

import { HomeModule } from './+home/home.module';
import { BlogModule } from './+blogs/blog.module';
import { AboutModule } from './+about/about.module';
import { TodoModule } from './+todo/todo.module';

import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from './shared/footer/footer.component'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, XLargeDirective } from './app.component';


@NgModule({
  declarations: [ AppComponent, XLargeDirective, NavbarComponent, FooterComponent ],
  imports: [
    SharedModule,
    HomeModule,
    AboutModule,
    TodoModule,
    BlogModule,
    AppRoutingModule
  ]
})
export class AppModule {
}

export { AppComponent } from './app.component';

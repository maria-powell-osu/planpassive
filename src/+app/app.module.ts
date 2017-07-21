import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeModule } from './+home/home.module';
import { BlogModule } from './+blogs/blog.module';
import { AboutModule } from './+about/about.module';
import { TodoModule } from './+todo/todo.module';
import { CalculatorsModule } from './+calculators/calculators.module';

import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from './shared/footer/footer.component'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, XLargeDirective } from './app.component';


@NgModule({
  declarations: [ AppComponent, XLargeDirective, NavbarComponent, FooterComponent ],
    //declarations: [ AppComponent, XLargeDirective ],

  imports: [
    SharedModule,
    HomeModule,
    AboutModule,
    TodoModule,
    BlogModule,
    CalculatorsModule,
    AppRoutingModule
  ]
})
export class AppModule {
}

export { AppComponent } from './app.component';

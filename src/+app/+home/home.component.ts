import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';
import { BlogService} from '../+blogs/blog.service';
import { IBlog } from "../+blogs/blog.schema";
// import { CalculatorsComponent} from "../calculators/calculators.component";

// import { ModelService } from '../shared/model/model.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [BlogService] //dependency injection
})
export class HomeComponent {
  blogs : IBlog[];
  errorMessage : string;

    constructor(private _blogService : BlogService){}
    ngOnInit(): void {
        //Retrieve all Blogs
        this._blogService.getBlogs()
        .subscribe(blogs => this.blogs = blogs,
        error => this.errorMessage = <any>error);
    }
}


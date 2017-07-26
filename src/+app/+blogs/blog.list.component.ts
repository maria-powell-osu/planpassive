import { Component, OnInit } from '@angular/core';
import { BlogService} from './blog.service';
import { IBlog } from "./blog.schema";
import { SeoService } from "../shared/seo.service";
import { isBrowser } from 'angular2-universal';

@Component({
    templateUrl: "./blog.list.component.html",
    providers: [BlogService] //dependency injection
})

export class BlogListComponent implements OnInit {
    blogs : IBlog[];
    errorMessage : string;

    constructor(private _blogService : BlogService,
                private _seoService: SeoService){
        this._seoService.setTitle("Plan Passive Blog");
        this._seoService.setMetaDescription("Your source for information on the best passive income investments and personal finance topics on how to create a lifestyle free of money worries.");
    }

    ngOnInit(): void {
         if(isBrowser){
            window.scrollTo(0, 0);
        }
        //Retrieve all Blogs
        this._blogService.getBlogs()
        .subscribe(blogs => this.blogs = blogs,
        error => this.errorMessage = <any>error);
    }
}
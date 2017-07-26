import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';
import { BlogService} from '../+blogs/blog.service';
import { IBlog } from "../+blogs/blog.schema";
import { CalculatorsComponent} from "../+calculators/calculators.component";
import { SeoService } from "../shared/seo.service";
import { isBrowser } from 'angular2-universal';

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

    constructor(private _blogService : BlogService, private _seoService: SeoService){
      this._seoService.setTitle("Plan Passive – Passive Income for a Free Life");
      this._seoService.setMetaDescription("Plan your ideal lifestyle by creating passive income streams. Make your money work hard so you don’t have to. Home of the best Rental Property Calculator.");
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


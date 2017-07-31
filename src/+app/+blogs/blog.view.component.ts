import { Component, OnInit, OnDestroy  } from '@angular/core';
import { IBlog } from "./blog.schema";
import { Router, ActivatedRoute } from "@angular/router";
import { BlogService } from "./blog.service";
import { Subscription } from 'rxjs/Subscription';
import { IComment } from '../shared/comments/comment.schema';
import { SeoService } from "../shared/seo.service";
import { isBrowser } from 'angular2-universal';


@Component({
    templateUrl: "./blog.view.component.html",
    providers: [BlogService]
})

export class BlogViewComponent implements OnInit, OnDestroy  {
    blog : IBlog;
    errorMessage : string;
    originalComment : IComment;
    private sub: Subscription;
    public isCollapsed:boolean;


    constructor(private _route : ActivatedRoute, private _blogService: BlogService,
                private _router: Router, private _seoService: SeoService){
                    this._seoService.setTitle("Plan Passive Blog");
                    this._seoService.setMetaDescription("Your source for information on the best passive income investments and personal finance topics on how to create a lifestyle free of money worries.");
    }

    ngOnInit(): void {
        if(isBrowser){
            window.scrollTo(0, 0);
        }
        this.isCollapsed = true;
        this.sub = this._route.params.subscribe(
            params => {
                let name = this._route.snapshot.params['name'];
                this.getBlog(name);
            });
    }

     ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getBlog(name: string){
        this._blogService.getBlog(name).subscribe(
            blog => { 
                this.blog = blog;
                if (this.blog){
                    if(this.blog.titleTag){
                        this._seoService.setTitle(blog.titleTag);
                    }
                    if(this.blog.metaTag){
                        this._seoService.setMetaDescription(blog.metaTag);
                    }
                }
            },
            error => this.errorMessage = <any>error
        );
    }
}
import { Component, OnInit, OnDestroy  } from '@angular/core';
import { IBlog } from "./blog.schema";
import { Router, ActivatedRoute } from "@angular/router";
import { BlogService } from "./blog.service";
import { Subscription } from 'rxjs/Subscription';
import { IComment } from '../shared/comments/comment.schema';

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


    constructor(private _route : ActivatedRoute,
                private _blogService: BlogService,
                private _router: Router){
                    
    }

    ngOnInit(): void {
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
            blog => this.blog = blog,
            error => this.errorMessage = <any>error);
    }
}
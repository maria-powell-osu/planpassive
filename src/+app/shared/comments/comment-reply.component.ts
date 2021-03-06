import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ReCaptchaComponent } from 'angular2-recaptcha';
import { FormGroup , FormBuilder, FormControl, ValidatorFn, Validators, AbstractControl} from '@angular/forms';
import { CommentService} from './comment.service';
import { IComment } from './comment.schema';
import { IBlog} from '../../+blogs/blog.schema';
import { isBrowser } from 'angular2-universal';

@Component({
    selector: 'commentreply',
    templateUrl: "./comment-reply.component.html",
    providers: [CommentService]
 })
export class CommentReplyComponent {
    @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
    @Input() blog : IBlog;
    @Input() formid : string;
    @Input() respondsTo : any;
    @Input() originalComment : IComment;
    @Input () isCollapsed : boolean;
    @Output() isCollapsedChange = new EventEmitter();
    @Output() blogChange = new EventEmitter();
    @Output() originalCommentChange = new EventEmitter();
    errorMessage : any;
    isBrowser : any;
    commentReplyForm : FormGroup;
    userHitReply: boolean;
    EMAIL_REGEX = "\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+";

    constructor(private _fb: FormBuilder, private _commentService : CommentService){
        this.userHitReply = false;
        this.isBrowser = isBrowser;
        this.commentReplyForm = this._fb.group({  
            name :  ['', [Validators.required]],
            content : ['', [Validators.required]],
            //email : ['', [Validators.required, Validators.pattern(this.EMAIL_REGEX)]],
            email: '',
            website: '',
            date: '',
            captcha: ['', [Validators.required]],
            blogKey : '',
            respondsTo: undefined
         });   
         
            
    }
    captchaResponse(captchaResponse: string) {
        this.commentReplyForm.patchValue({"captcha" : captchaResponse});
    }

    submitNewComment(){
        this.userHitReply = true;

            //isBrowser check was added for server side rendering support with universal
             if(this.commentReplyForm.valid
                && this.blog.key 
                && (isBrowser == false 
                    || (isBrowser == true
                    && this.captcha.getResponse() 
                    && this.captcha.getResponse() !== ''))
                ){
                
                //set the blog key into the comment
                this.commentReplyForm.patchValue({"blogKey" : this.blog.key});

                //add the current date to the comment
                this.commentReplyForm.patchValue({"date": String(new Date())});

                //Only send this field if it is not a first level comment
                if(this.respondsTo && this.respondsTo != ""){
                     this.commentReplyForm.patchValue({"respondsTo": this.respondsTo});
                }

                //create a new comment 
                this._commentService.postComment(JSON.stringify(this.commentReplyForm.getRawValue()), this.blog)
                 .subscribe((response:any)=>{this.commentSubmitted(response);},
                error => this.errorMessage = <any>error);
            }
    }
    private commentSubmitted(response: any){
        //collapse and reset the reply form
        this.isCollapsed = true;
        this.isCollapsedChange.emit(this.isCollapsed);
        this.commentReplyForm.reset();

        //add the new comment to the form for display
        if(response.respondsTo){
            this.originalComment.responses.push(response);
            this.originalCommentChange.emit(this.originalComment);
        //If it is general comment add it to comments list in blog
        } else{
            this.blog.comments.push(response);
            this.blogChange.emit(this.blog);
        }
    }
    cancelComment(){
        this.isCollapsed = true;
        this.isCollapsedChange.emit(this.isCollapsed);
        this.commentReplyForm.reset();
    }
}

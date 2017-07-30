import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { IComment } from "./comment.schema";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { EmailService } from "../email.service";

@Injectable()
export class CommentService {
    postData : any;
    constructor (private _http: Http, private _emailService: EmailService){}

//TODO: this list needs to get ordered
    postComment(postData: any, blog: any) : Observable<IComment[]> {
        this.postData = JSON.parse(postData);
        this.postData.blog = blog;
        //let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
        return this._http.post("http://planpassive.com/comments", postData)
        .map(this.extractData.bind(this))
        .catch(this.handleError);
    }

    private extractData(response: Response) {
        let comments = <IComment[]>response.json();
        //if the comment was posted successfully, send new Comment notification
        this._emailService.SendNewCommentEmailNotification(this.postData).subscribe();
        return comments || [];
    }


    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Internal Server Error');
    }
}
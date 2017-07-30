import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Http, Response } from "@angular/http";

@Injectable()
export class EmailService {
    constructor (private _http: Http){}
    SendNewCommentEmailNotification(postData: any) : Observable<Response> {
        //let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
        return this._http.post("/api/email", postData)
        .map(this.extractData)
        .catch(this.handleError);
    }

    private extractData(response: Response) {
        return response;
    }
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Internal Server Error');
    }
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ReCaptchaModule } from 'angular2-recaptcha';

import { CommentViewComponent } from './comment-view.component';
import { CommentReplyComponent } from './comment-reply.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReCaptchaModule
  ],
  declarations: [
    CommentViewComponent,
    CommentReplyComponent
  ]
})
export class CommentModule { }
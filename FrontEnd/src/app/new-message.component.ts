import { Component } from '@angular/core'
import { WebService } from './web.service'
import { AuthService } from './auth.service'
//Provide it as an angular component - Component Decorator, defined a template, starting message text.
@Component({
    selector: 'new-message',
    template: `
    <mat-card class="content newMessage">
        <mat-card-title> You must be a member to post a Message! </mat-card-title>
        <img mat-card-avatar src="https://img1.etsystatic.com/187/0/13105519/il_570xN.1258695533_9o6p.jpg" alt="Avatar image here">
        <mat-card-content>
            <mat-input-container>
                <textarea class="title" [(ngModel)]="message.text" matInput placeholder="Insert your Message"></textarea>
             </mat-input-container>
             <mat-card-actions>
                <button (click)="post()" mat-button color="warn">Send</button>
             </mat-card-actions>
        </mat-card-content>
    </mat-card>
    `
})

//Export it.
export class NewMessageComponent{
    
    constructor(private webService : WebService, private auth : AuthService){}
    message = {
        owner : this.auth.name,
        text : ""
    }

    owner="DapperStacks";
    
    post(){
        this.webService.postMessage(this.message);
    }
}
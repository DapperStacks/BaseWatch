//Displays all the messages inside the message board. 
import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
//Provide it as an angular component - Component Decorator, defined a template, starting message text.
@Component({
    selector: 'messages',
    template: `
    <mat-card class="card hero">
        <mat-card-title> Hero Board </mat-card-title>
        <mat-card class=" card content"> 
            <div *ngFor="let message of webService.messages | async">
                <img mat-card-avatar src="https://pbs.twimg.com/media/B2IupThIEAANjji.png" alt="Avatar image here">
                <mat-card-title [routerLink]="['/messages', message.owner]" style="cursor:pointer">{{message.owner}}</mat-card-title>
                <mat-card-content>{{message.text}}</mat-card-content>
            </div>
        </mat-card>
    </mat-card>
    `
})

//Export it.
export class MessagesComponent{
    constructor(private webService : WebService, private route: ActivatedRoute) {}

    

    ngOnInit(){
        var name = this.route.snapshot.params['name'];
        this.webService.getMessages(name);
        this.webService.getUser().subscribe();
    }


}
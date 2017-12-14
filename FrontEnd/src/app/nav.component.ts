import { Component } from '@angular/core';
import { AuthService } from './auth.service';



@Component({
    selector: 'nav',
    template: ` 
        <mat-toolbar color="warn">
            <button mat-button routerLink="/"> 
                <img class="baseWatchLogo" src="http://blizzpro.com/wp-content/uploads/sites/10/2017/11/OWL2-380x162.png" alt="BaseWatchLogo">
            </button>
            <button mat-button routerLink="/messages"> Saved Strategies </button>
            <span style="flex: 1 1 auto"></span>
            <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/login"> Login </button>
            <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/register"> Register </button>
            <button *ngIf="auth.isAuthenticated" mat-button routerLink="/user"> Welcome {{auth.name}} </button>
            <button *ngIf="auth.isAuthenticated" mat-button (click)="auth.logout()"> Logout </button>
        </mat-toolbar>
    `
})

//Export it.
export class NavComponent{
    constructor(private auth: AuthService){}
}
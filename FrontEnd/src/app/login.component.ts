import { Component } from '@angular/core';
import { AuthService } from './auth.service';



@Component({
    selector: 'login',
    template: ` 
        <mat-card class="card content">
            <mat-input-container>
                <input matInput [(ngModel)]="loginData.email" placeholder="Email" type="email">
            </mat-input-container>
            <mat-input-container>
                <input matInput [(ngModel)]="loginData.password" placeholder="Password" type="password">
            </mat-input-container>
            <button mat-raised-button color="warn" (click)="login()">Login</button>
        </mat-card>
    `
})

//Export it.
export class LoginComponent{
    constructor(private auth: AuthService){}


    loginData = {
        email:'',
        password:''
    }

    login(){
        this.auth.login(this.loginData);
    }
}
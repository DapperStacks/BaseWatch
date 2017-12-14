import { Component } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from './nav.component';


@Component({
  selector: 'home',
  template: `
    <div class="row column u-align-center">
    <mat-card class="welcome">
      <div class="b-title">
        <h1 class=".mat-display-4">
          Welcome to BaseWatch
        </h1>
        <h2 class=".mat-display-3">
          Your home for strategy, hero comparisons, and competitive tactics!
        </h2>
      </div>
      <div>
        <h3 class=".mat-display-2">
          Season 7 is here! Many things have changed since the last patch over the last few months! 
        </h3>
        <h4 class=".mat-display-2">
          We're seeing major changes since the last Blizzard update, heroes have been nerfed and boosted, please see the chart for specifics.
          As the Competitive season draws closer to the end, players around the world have dedicated time to gameplay to develop effective strategies depending on each team!
        </h4>
        <h5 class=".mat-display-2">
          Please give us your feedback for grandmaster level tactics!
        </h5>
      </div>
    </mat-card>
    <mat-card>
      <img mat-card-image src="https://www.hdwallpapers.in/walls/overwatch_4k-HD.jpg" alt="image caption">
    </mat-card>
  </div>
  <mat-card>
    <img mat-card-image class="image" src="https://static1.squarespace.com/static/56b3cac001dbae7de45090ec/t/5740ea47e707eb88946cb876/1463938013394/" alt="Overwatch Stats">
  </mat-card>
  <new-message></new-message>
  <messages></messages>
  
  `,
})

export class HomeComponent {}

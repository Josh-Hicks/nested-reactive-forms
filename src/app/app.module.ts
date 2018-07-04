import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { CoachComponent } from './coach/coach.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    CoachComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnasComponent } from './onas/onas.component';

//material components
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NawigacjaComponent } from './nawigacja/nawigacja.component';
import {MatCardModule} from '@angular/material/card';
import { KartaComponent } from './karta/karta.component';


@NgModule({
  declarations: [
    AppComponent,
    OnasComponent,
    NawigacjaComponent,
    KartaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

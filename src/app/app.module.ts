import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CoutfinalComponent } from './coutfinal/coutfinal.component';
import { PrecedentComponent } from './precedent/precedent.component';
import { SuivantComponent } from './suivant/suivant.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    CoutfinalComponent,
    PrecedentComponent,
    SuivantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   
 
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }

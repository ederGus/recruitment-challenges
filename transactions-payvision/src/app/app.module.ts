import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/payvision-home.component';
import { MenuComponent } from './menu/payvision-menu.component';
import { TransactionComponent } from './list-transactions/payvision-transactions.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    TransactionComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

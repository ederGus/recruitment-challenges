import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/payvision-home.component';
import { MenuComponent } from './menu/payvision-menu.component';
import { TransactionComponent } from './list-transactions/payvision-transactions.component';
import { CommonModule } from '@angular/common';
import { ReadmeComponent } from './readme/payvision-readme.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
  }

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    TransactionComponent,
    ReadmeComponent
  ],
  bootstrap: [AppComponent],
  exports: [TranslateModule]
})
export class AppModule {}

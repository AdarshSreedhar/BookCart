import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {TopComponent} from './components/top-bar.component';
import {LeftComponent} from './components/left-side-menubar.component';
import {BookComponent} from './components/books.component';
import {AddCategory} from './components/category.component';
import {AddBooks} from './components/add-books.component';
//import {CategoryBooks} from './components/eachCategory-books.component';

import {BooksService} from './services/books.service';

import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,LeftComponent,TopComponent,BookComponent,AddCategory,AddBooks
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

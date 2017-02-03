import {Component} from '@angular/core';
import {BookComponent} from './books.component';

import {BooksService} from '../services/books.service';

@Component({
	selector:'left-component',
	templateUrl:'./left-side-menubar.component.html',
	styleUrls:['./left-side-menubar.component.css']
})

export class LeftComponent{
	categories: string;
	constructor(private book:BookComponent,private books:BooksService){
		this.names = new Data('');
		this.books.getCategories().subscribe(res=>{
			this.categories = res;
			this.categories = JSON.parse((this.categories).slice(8,this.categories.length-1));
		});
	}

	names: Data;
getEachCategory(name:String){
		this.names.category = name;
		//this.book.getEachCategoryBooks(this.names);
	}

}

class Data{
	category:String;
	constructor(c:String){
		this.category = c;
	}
}
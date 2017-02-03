import {Component} from '@angular/core';
import {BooksService} from '../services/books.service';
import {BookComponent} from './books.component';

@Component({
	selector: 'full-app',
	templateUrl: './top-bar.component.html',
	providers:[BooksService,BookComponent],
})

export class TopComponent{
	categories: string;
	names: Data;
	constructor(private books:BooksService,private book:BookComponent){
		this.names = new Data('');
		this.books.getCategories().subscribe(res=>{
			this.categories = res;
			this.categories = JSON.parse((this.categories).slice(8,this.categories.length-1));
		});
	}

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
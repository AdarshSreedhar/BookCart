import {Component} from '@angular/core';
import {BooksService} from '../services/books.service';

@Component({
	selector:'eachCategory-books',
	templateUrl:'./eachCategory-books.component.html',
	
	styleUrls:['./books.component.css'],
	providers:[BooksService],
})

export class CategoryBooks {
	constructor(private books:string,private book:BooksService){
	}

	bookData(books){
		
	}
}
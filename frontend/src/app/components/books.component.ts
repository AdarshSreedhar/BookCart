import {Component} from '@angular/core';
import {BooksService} from '../services/books.service';
import {AfterViewInit} from '@angular/core';
//import {CategoryBooks} from './eachCategory-books.component';

declare let componentHandler : any;
@Component({
	//moduleId: module.id,
	selector: 'all-books',
	templateUrl: './books.component.html',
	providers:[BooksService],
	styleUrls:['./books.component.css'],

})

export class BookComponent implements AfterViewInit{
		books : string;
		count : number;
		//booked: string;
		//book : books;
		data1 : Values;
		data : Data;
		values : string;
	constructor(private bookservice : BooksService){
		console.log('In book ts');
		this.booksData();
		this.count = 0;
	}

	ngAfterViewInit(){
		console.log('In view');
		componentHandler.upgradeDom();
	}

	getBooked(bn,c){
		console.log("call the book api in nodejs");
		
		console.log(bn.toString());
		console.log(typeof(c));
		this.data = new Data(bn.toString(),c);
		this.bookservice.getBooked(this.data).subscribe(
				res => {
					console.log(res);
					this.booksData();
				});
		 }
		 //console.log(this.books);*/
	

	booksData(){
		this.bookservice.getData().subscribe(
			res => {
				this.books = res;
				this.books = JSON.parse((this.books).slice(8,this.books.length-1));
				console.log(this.books[0]);
			}
			);
	}

	removeBooks(bn,c){
		this.data = new Data(bn.toString(),c);
		this.bookservice.removeBooks(this.data).subscribe(res=>{
			console.log(res);
			this.booksData();
		});
	}

	/*getEachCategoryBooks(name:Object){
		this.bookservice.getCategory(name).subscribe(res=>{
			/*var cno = res.json().data[0].cat_no;
			this.values = new Values(''+cno);
			this.bookservice.categoryBooks(this.values).subscribe(res=>{
				console.log(res);
			})
			//console.log(res.json().data[0].cat_no);
			this.values = res.text();
			this.values = (this.values.slice(19,this.values.length-3));
			console.log(this.values);
			this.data1 = new Values(''+this.values);
			this.bookservice.categoryBooks(this.data1).subscribe(res=>{
				console.log(res.text().slice(9,res.text().length-2));
				//this.books = '';
				this.values = res.text().slice(9,res.text().length-2);
				this.count = 1;

				//this.categoryBooks.bookData(this.books);
				console.log(this.books[0]);
			})
			//console.log(this.values.length);
			//console.log(this.values);
		})
	}*/

}

class Data{
	bookName:string;
	copies:number;

	constructor(n:string,c:number){
		this.bookName = n;
		this.copies = c;
	}
}

class Values{
	c_no:String;
	constructor(c:String){
		this.c_no = c;
	}
}
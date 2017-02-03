import {Component} from '@angular/core';
import {BooksService} from '../services/books.service';
import {Router} from '@angular/router';

@Component({
	selector:'category',
	templateUrl:'./category.component.html',
	styleUrls:['./category.component.css']
})

export class AddCategory{
	data : Data;
	display : Object;
	bookPrice : Object;
	present : String;
	value : Value;
	booksincat :Object;
	gotbook : Object;
	constructor(private book:BooksService,private route: Router){
		console.log('In category const.');
		console.log(typeof(route.url));
		//this.data = JSON.parse('{name:""}');
		this.data = new Data('',0);
		this.gotbook = 0;
		if(this.route.url == '/each/books' || this.route.url == '/add/category' || this.route.url == '/del/category'){
			this.present = '';
		this.bookPrice = '';
		this.book.eachCategoryBooks().subscribe(res=>{
			console.log(res.json().data);
			this.display = res.json().data;
			console.log(this.display[0].cat_names);
			console.log(Object.keys(this.display).length);
			});
		}
	}
	operate(){
		switch (this.route.url) {
			case "/add/category":
					this.insert();
				break;
			case "/del/category":
					this.remove();
				break;
			case "/get/books/price":
					this.price();
				break;
			case "/mod/books/price":
					this.modPrice();
				break;
			case "/each/books":
					this.categorybooks();
				break;
			default:
				// code...
				break;
		}
	}

	insert(){
		//console.log(typeof(JSON.stringify(this.data)));
		//console.log(JSON.stringify(this.data));
		//this.display = '';
		
		for (var i = 0; i < Object.keys(this.display).length; ++i) {
				if(this.data.cat_name == this.display[i].cat_names)
				{
					this.present = 'Already Present';
				}
				//console.log(this.data.cat_name , this.display[i].cat_name);
			}
			if(this.present!='Already Present'){
				console.log('yes');
				this.book.insertCategory(this.data).subscribe(res=>{
					if(res.json().data=='error')
					{
						this.present = 'could not';
					}
				})
			}


	}
	remove(){
		//this.display = '';
		for (var i = 0; i < Object.keys(this.display).length; ++i) {
				if(this.data.cat_name == this.display[i].cat_names)
				{
					this.present = 'ok';
				}
				//console.log(this.data.cat_name , this.display[i].cat_name);
			}
			if(this.present == 'ok'){
				this.book.removeCategory(this.data).subscribe(res=>{
					if(res.json().data == 'error'){
						this.present = 'could not';
					}
				});
			}
			else{
				this.present = 'Category not present';
			}
	}
	price(){
		this.display = '';
		this.book.getPrice(this.data).subscribe(res=>{console.log(res);
			if(res.json().data != '')
				{this.bookPrice = res.json().data[0].price;
					this.present = '';
				}
			else
			{
				this.present = 'Book not present';
				this.bookPrice = '';
			}
		});
	}
	modPrice(){
		this.display = '';
		this.book.modifyPrice(this.data).subscribe(res=>{console.log(res);
			if(res.json().data == 'error')
			{
				this.present = 'Book not present';
			}
			else{
				this.present = '';
			}
		});
	}

	categorybooks(){
		console.log(typeof(this.display[0].cat_name));
			for (var i = 0; i < Object.keys(this.display).length; ++i) {
				if(this.data.cat_name == this.display[i].cat_names)
				{
					this.present = 'ok';
				}
				//console.log(this.data.cat_name , this.display[i].cat_name);
			}
			console.log(this.present);
			if(this.present == 'ok'){
				//this.book.getCategory(this.)
				console.log('yes');
				this.book.getCategory(this.data).subscribe(res=>{
					console.log(res.json().data[0]);
					this.value = new Value('');
					this.value.c_no = res.json().data[0].cat_no;
					this.book.categoryBooks(this.value).subscribe(res=>{
						this.booksincat = res.json().data;
						this.gotbook = 1;
					})
				})
			}
			else{
				this.present = 'Category not present';
			}
		}
}

class Data{
	cat_name:string;
	newPrice:number;
	constructor(n:string,p:number){
		this.cat_name = n;
		this.newPrice = p;
	}
}

class Value{
	c_no:string;
	constructor(c:string){
		this.c_no = c;
	}
}
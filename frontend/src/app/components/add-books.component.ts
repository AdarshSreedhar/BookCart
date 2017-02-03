import {Component} from '@angular/core';
import {BooksService} from '../services/books.service';
import {Router} from '@angular/router';

@Component({
	selector:'books',
	templateUrl:'./add-books.component.html',
	styleUrls:['./category.component.css']
})

export class AddBooks {
	data : Data;
	present: String;
	display : Object;
	constructor(private book:BooksService,route : Router) {
		//console.log('In add-books const.');
		console.log(route.url);
		this.data = new Data('','',0,0,'',0);
	}
	insert(){
		console.log('In add book insert');
		if(this.data.copies!=0)
		{		this.book.eachCategoryBooks().subscribe(res=>{console.log(res);
				console.log(res);
				if(res.json().data != "error")
   				{	this.display = res.json().data;
   					for (var i = 0; i < Object.keys(this.display).length; ++i) {
						if(this.data.category == this.display[i].cat_names)
						{
								this.present = 'ok';
						}
				console.log(this.data.category , this.display[i].cat_name);
				}
				
				if(this.present == 'ok')
   				{	this.data.cat_no = res.json().data[0].cat_no;
   					this.book.insertBook(this.data).subscribe(res=>{console.log(res);
   						if(res.json().data == "error")
   						{
   							this.present = 'Book Exists';
   							
   						}
   						else{
   							this.present = '';
   						}
   						this.data.cat_no = 0;
   					});
   				}
   				else{
   					this.present = 'Category not present';
   				}
   			}
			});
			}
		
		else{
			this.present = 'Copies cannot be zero';
		}
	}
};

class Data{
	bookName:String;
	desc:String;
	price:number;
	copies:number;
	category:String;
	cat_no: number;
	constructor(n:string,d:string,p:number,c:number,ca:String,cat:number){
		this.bookName = n;
		this.desc = d;
		this.price = p;
		this.copies = c;
		this.category = ca;
		this.cat_no = cat;
	} 
}
import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BooksService {
	headers : Headers;
	category : String;
  constructor(private http:Http) {
  		console.log('book-service-const');
  		this.headers = new Headers();
   		this.headers.append('Content-type','application/json');
   }

   getData(){
   		return this.http.get("http://localhost:3000/get/books").map(res => (res.text()));
   }

   getCategories(){
   		return this.http.get("http://localhost:3000/get/categories").map(res => (res.text()));
   }

   insertCategory(name:Object){
   		
   		console.log(JSON.parse(JSON.stringify(name)));
   		return this.http.post("http://localhost:3000/add/category",JSON.parse(JSON.stringify(name)),this.headers);
   }

   removeCategory(name:Object){
   		console.log(JSON.parse(JSON.stringify(name)));
   		return this.http.post("http://localhost:3000/del/category",JSON.parse(JSON.stringify(name)),this.headers);
   }

   insertBook(name:Object){
   		console.log(typeof(JSON.parse(JSON.stringify(name))));
   		return this.http.post("http://localhost:3000/add/books",JSON.parse(JSON.stringify(name)),this.headers);
   }

   getCategory(name:Object){
   		console.log(JSON.parse(JSON.stringify(name)));
   		return this.http.post("http://localhost:3000/get/category",JSON.parse(JSON.stringify(name)),this.headers);
   }

   getBooked(name:Object){
   		
   		console.log(JSON.parse(JSON.stringify(name)));
   		return this.http.put("http://localhost:3000/get/books/copies",JSON.parse(JSON.stringify(name)),this.headers);
   }

   removeBooks(name:Object){
   	console.log(JSON.parse(JSON.stringify(name)));
   		return this.http.post("http://localhost:3000/remove/books",JSON.parse(JSON.stringify(name)),this.headers);
   }

   getPrice(name:Object){
   	console.log(JSON.parse(JSON.stringify(name)));
   		return this.http.post("http://localhost:3000/get/books/price",JSON.parse(JSON.stringify(name)),this.headers);
   }

   modifyPrice(name:Object){
   	console.log(JSON.parse(JSON.stringify(name)));
   		return this.http.put("http://localhost:3000/modify/books/price",JSON.parse(JSON.stringify(name)),this.headers);
   }

   categoryBooks(name:Object){
   	console.log(JSON.parse(JSON.stringify(name)));
   		return this.http.post("http://localhost:3000/get/category/books",name,this.headers);
   	}

   	eachCategoryBooks(){
   		console.log('hey');
   		return this.http.post("http://localhost:3000/eachCategory/books",'{\'a\':\'b\'}',this.headers);
   	}
}

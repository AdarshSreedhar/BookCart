# BOOKCART APPLICATION

A simple application that demonstrates various kinds of operations on books sold online.

 **FRONTEND** : ANGULAR 2 , MATERIAL DESIGN LITE FRAMEWORK    
 **BACKEND**  : NODEJS , MySQL
***************

### DATABASE DESIGN : 
	NAME : bookcart
	Consists of two tables :
	1. TABLE NAME : category
	Attributes are :
	+--------+-----------+
	| cat_no | cat_names |
	+--------+-----------+
	cat_no is the category number(Primary Key).
	cat_names is the name of the category.
		 
		 
	2. TABLE NAME : book
	Attributes are :
	+--------+-------------+-------+--------+------+
	| name   | description | price | copies | c_no |
	+--------+-------------+-------+--------+------+
	name of the book (Primary Key).
	description of the book.
	price of the book. 
	copies is the number of copies of the book.
	c_no is the category number which is the foriegn key that is referring to cat_no of the category table.
	Cascade c_no when the its referring cat_no gets deleted.
	
***************

### To install the application :
	1. git clone https://https://github.com/shashanktatti/BookCart

***************


### To run the application :
	1. Get into frontend directory and run :
		> npm install
	2. Get into backend directory and  run :
		> npm install
	3. After all the dependencies are installed , in the backend directory run :
		> node server.js
	and in the frontend directory run :
		> ng serve
	
		
### SCREENSHOTS :
  ![alt text](dash.png?raw=true)

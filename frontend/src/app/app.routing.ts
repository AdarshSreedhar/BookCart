import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {TopComponent} from './components/top-bar.component';
import {AddCategory} from './components/category.component';
import {AddBooks} from './components/add-books.component';
import {BookComponent} from './components/books.component';
//import {CategoryBooks} from './components/eachCategory-books.component';

const appRoutes : Routes = [
	{
		path:'',
		component:	TopComponent
	},
	{
		path:'add/category',
		component: 	AddCategory
	},
	{
		path:'add/books',
		component: AddBooks
	},
	{
		path:'del/category',
		component: 	AddCategory
	},
	{
		path:'mod/books/price',
		component: 	AddCategory
	},
	{
		path:'get/books/price',
		component: 	AddCategory
	},
	{
		path:'each/books',
		component: AddCategory
	}
];

export const routing : ModuleWithProviders  = RouterModule.forRoot(appRoutes);


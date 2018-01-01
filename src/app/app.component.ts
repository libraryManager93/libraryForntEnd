import { Component,OnInit } from '@angular/core';
import { HttpCallsService } from "./http-calls.service";
import { Http,Response,Headers } from '@angular/http';
import {PageEvent} from '@angular/material';
import { RouterModule, Routes,Router } from '@angular/router';
import { BookDataService } from './book-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  test : string='test';
   books :any;
   libraryLove : string;
   display : any;
   booksLength : number;
   loaderVisible : boolean= true;
  pageHidden : boolean= true;
  router : Router;
     constructor(private http:HttpCallsService,
     private _router: Router, private displayBooks : BookDataService ) { 
       this.router = _router;
     }
     
  ngOnInit(){
   this.http.getBooks().subscribe(data  => {
     
     this.libraryLove= data.text();
     this.displayBooks.changeDisplayedBooks(JSON.parse(this.libraryLove).result);
     //Setting the behavioursubject value
     this.display=this.books.slice(0,10);
     this.booksLength=Object.keys(this.books).length;
       this.loaderVisible = false;
      this.pageHidden = false;
//      console.log(this.books[0]);
     })

          this.displayBooks.displayedBooks.subscribe(message => 
    {
    this.books=message;
    console.log(this.books);
    } )

//console.log(this.router.url);
    // console.log('onInit'+this.libraryLove[0].title_suggest);
    
  }


  onPaginateChange(x: any){
console.log(x.pageSize+'-------'+x.pageIndex+'----'+x.length);
let pageIndex=x.pageIndex;
let totalLength= x.length;
let currPageSize= x.pageSize;
let startIndex= (pageIndex * currPageSize)+1;
let endIndex= ((pageIndex+1)*currPageSize);
console.log(startIndex+'====='+endIndex);
this.display=this.books.slice(startIndex-1,endIndex);
  }

  onSelectBook(x : any){
    console.log('Selected Book==='+x.title_suggest);
    console.log('Book Interface'+JSON.stringify(x));
  }

 
}

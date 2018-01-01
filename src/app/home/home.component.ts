import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Book } from '../book';
import { BookDataService }  from '../book-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input() book;
@Input() test;
@Output() bookSelected= new EventEmitter();
selectedBook = <any>{} ;

loaderVisible : boolean= true;;
imageHidden : boolean= true;

baseImgsrc : string;
imageSrc : string;
  constructor(private shareBookData : BookDataService) { }


  ngOnInit() {
    this.baseImgsrc='https://covers.openlibrary.org/b/olid/';
    this.imageSrc =this.baseImgsrc+this.book.cover_edition_key+'.jpg';
    //console.log('Home COmp'+this.book);
  }

    onBookSelect(){
      this.selectedBook.title_suggest =this.book.title_suggest;
      this.selectedBook.title =this.book.title;
      this.selectedBook.cover_edition_key =this.book.cover_edition_key;
      this.selectedBook.ebook_count_i =this.book.ebook_count_i;
      this.selectedBook.author_name =this.book.author_name;
      this.selectedBook.contributor =this.book.contributor;
      this.selectedBook.publisher =this.book.publisher;
      this.selectedBook.first_sentence =this.book.first_sentence;
      this.selectedBook.language =this.book.language;
      this.selectedBook.subject =this.book.subject;
      this.shareBookData.changeMessage(this.selectedBook);
    this.bookSelected.emit(this.selectedBook);
  }

OnImageLoad(){
  this.loaderVisible = false;
this.imageHidden = false;
  //console.log('Image loaded'+this.book.title_suggest);
}
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Book } from './book';


@Injectable()
export class BookDataService {
  private messageSource = new BehaviorSubject<any>("default message");
  currentMessage = this.messageSource.asObservable();
  
  private displayedBooksSource = new BehaviorSubject<any>("No Books Are There");
  displayedBooks = this.displayedBooksSource.asObservable();
  constructor() { }


  
  changeMessage(message: any) {
    this.messageSource.next(message)
  }

    changeDisplayedBooks(message: any) {
    this.displayedBooksSource.next(message)
  }
}

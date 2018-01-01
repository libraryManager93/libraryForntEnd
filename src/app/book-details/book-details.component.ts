import { Component, OnInit } from '@angular/core';
import { BookDataService }  from '../book-data.service';
import { AuthHttp } from 'angular2-jwt';
import { HttpCallsService } from "../http-calls.service";



@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

displayBook: JSON;
  response : JSON;
  token :string;
  thing : any;

  constructor(private shareBookData : BookDataService,public authHttp: AuthHttp
  ,private http : HttpCallsService) { }

  ngOnInit() {
    this.shareBookData.currentMessage.subscribe(message => 
    {
    console.log('Im the selected book'+JSON.stringify(message))
    this.displayBook=message.title;
    } )
  }
  
  onLogin(){
  this.http.getToken().subscribe(
    data=> {
      console.log(data);
      this.response=JSON.parse(data.text());
      this.token=this.response['token'];
      console.log('0000000000000----'+this.token);
      if(this.response){
       
        localStorage.setItem('token', this.token);
      }
    }

  );
}

  onBorrow(){
     this.authHttp.get('http://localhost:3000/borrow')
      .subscribe(
        data => this.thing = data,
        err => console.log(err),
        () => console.log('Request Complete')
      );
    console.log('Borrowing'+this.displayBook);
  }

}

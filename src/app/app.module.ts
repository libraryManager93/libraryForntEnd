import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatCardModule,MatPaginatorModule,MatButtonModule,MatToolbarModule
,MatAutocompleteModule,MatInputModule,MatFormFieldModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpCallsService } from "./http-calls.service";
import { BookDetailsComponent } from './book-details/book-details.component';
import {  APP_ROUTES } from './app.route';
import { RouterModule, Routes } from '@angular/router';
import { BookDataService }  from './book-data.service';
import { AuthModule } from './auth.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookDetailsComponent,
    HeaderComponent
  ],
  imports: [
     RouterModule.forRoot(
      APP_ROUTES
      ,{ useHash: true }
     ),
    BrowserModule,MatCardModule,MatPaginatorModule,MatButtonModule,HttpModule,BrowserAnimationsModule,
    AuthModule,MatToolbarModule,MatAutocompleteModule,MatInputModule,MatFormFieldModule,FormsModule, ReactiveFormsModule
  ],
  providers: [HttpCallsService,BookDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

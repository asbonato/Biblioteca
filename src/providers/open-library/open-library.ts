import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the OpenLibraryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OpenLibraryProvider {

  constructor(public http: HttpClient) {
    console.log('Hello OpenLibraryProvider Provider');
  }

  getBookData(isbn){
    return this.http.get('https://openlibrary.org/api/books?bibkeys=ISBN:'
      +isbn+'&jscmd=data&format=json');
  }

}

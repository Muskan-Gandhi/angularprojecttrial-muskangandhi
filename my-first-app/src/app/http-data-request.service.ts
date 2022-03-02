import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpDataRequestService {

  constructor(private ht:HttpClient) { }

  getdata(){
    // return this.ht.get("http://localhost:3000/posts");
    return this.ht.get("https://jsonplaceholder.typicode.com/users");
  }

  
}

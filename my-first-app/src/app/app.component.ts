import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  imageUrl=".././assets/img1.jfif"
  count=0;
  counterval(){
    this.count++;
  
  }
  nm=" ";
  name(){
    this.nm="muskan";
  }
}
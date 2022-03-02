import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor() { }
  today =new Date();

  day:any;
  daydate(){
    this.day =new Date();
    return this.day;
  }

}

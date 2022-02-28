import { Component, OnInit } from '@angular/core';
import { DatetimeService } from '../datetime.service';
import { UserInformationService } from '../user-information.service';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  // count=0
  constructor(public da:UserInformationService) {}

  //  count = this.da.increament;
  //  increase(){
  //    return this.da.increament++;
  //  }
  
  ngOnInit(): void {
  }
  // onSubmittoform(user:any){
  //   console.log(user)
  //   }
  
}

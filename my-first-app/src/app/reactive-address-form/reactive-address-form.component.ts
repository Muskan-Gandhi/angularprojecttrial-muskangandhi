import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-address-form',
  templateUrl: './reactive-address-form.component.html',
  styleUrls: ['./reactive-address-form.component.css']
})
export class ReactiveAddressFormComponent implements OnInit {

  constructor() { }
  myForm:any;
  ngOnInit(): void {
    this.myForm= new FormGroup({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required, Validators.email]),
      city: new FormControl('',Validators.required),
      age:new FormControl('',[Validators.required,Validators.min(18)]),
      mobnumber:new FormControl('',[Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      todate:new FormControl('',Validators.required),
      fromdate:new FormControl('',Validators.required),
      days:new FormControl('',[Validators.required])
      });
  }
  getdate(date:any){
    return new Date(date);
  }
  getdays(tdate:any,fdate:any){
    var days = (fdate.getTime() - tdate.getTime())/(1000 * 3600 * 24);
    return days;
  }
  onSubmit(form: FormGroup){
    console.log('valid?',form.valid);
    console.log("Firstname",form.value.firstname);
    console.log("lastname",form.value.lastname);
    console.log("Email",form.value.email);
    console.log("City ",form.value.city);
    console.log("Age",form.value.age);
    console.log("Phone Number",form.value.mobnumber);
    console.log("Date",this.getdate(form.value.todate));
    console.log("Date",this.getdate(form.value.fromdate));
    console.log("Date",this.getdays(this.getdate(form.value.todate),this.getdate(form.value.fromdate)));
  }
}

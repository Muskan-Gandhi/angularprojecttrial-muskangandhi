import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms-module',
  templateUrl: './reactive-forms-module.component.html',
  styleUrls: ['./reactive-forms-module.component.css']
})
export class ReactiveFormsModuleComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  myForm:any;
  ngOnInit(): void {
    // this.myForm= new FormGroup({
    // name:new FormControl(''),
    // email:new FormControl(''),
    // message: new FormControl('')
    // });
    this.myForm= this.fb.group({
      name:['', Validators.required],
      email:['',[ Validators.email]],
      message:['', Validators.minLength(10)]
    })
  
  }
onSubmit(form: FormGroup){
  console.log('valid?',form.valid);
  console.log("Name",form.value.name);
  console.log("Email",form.value.email);
  console.log("Message",form.value.message);
}
}

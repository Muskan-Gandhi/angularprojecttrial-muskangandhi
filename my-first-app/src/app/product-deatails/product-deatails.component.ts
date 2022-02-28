import { Component, OnInit } from '@angular/core';
import { UserInformationService } from '../user-information.service';

@Component({
  selector: 'app-product-deatails',
  templateUrl: './product-deatails.component.html',
  styleUrls: ['./product-deatails.component.css']
})
export class ProductDeatailsComponent implements OnInit {

  constructor(public dt:UserInformationService) {
    
  }

  // count = this.dt.increament;

  ngOnInit(): void {
  }

}

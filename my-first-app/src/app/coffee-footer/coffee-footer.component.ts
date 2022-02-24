import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-coffee-footer',
  templateUrl: './coffee-footer.component.html',
  styleUrls: ['./coffee-footer.component.css']
})
export class CoffeeFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  item='money';
//@Input() itemrecevied='';
}

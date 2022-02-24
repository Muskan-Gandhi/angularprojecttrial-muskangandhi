import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { CoffeeheadComponent } from './coffeehead/coffeehead.component';
import { CoffeeContentComponent } from './coffee-content/coffee-content.component';
import { CoffeeFooterComponent } from './coffee-footer/coffee-footer.component';
import { ParentComponent } from './parent/parent.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    CoffeeheadComponent,
    CoffeeContentComponent,
    CoffeeFooterComponent,
    ParentComponent,
    ProductComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


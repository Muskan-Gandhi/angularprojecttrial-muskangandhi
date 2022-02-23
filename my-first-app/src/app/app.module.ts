import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { CoffeeheadComponent } from './coffeehead/coffeehead.component';
import { CoffeeContentComponent } from './coffee-content/coffee-content.component';
import { CoffeeFooterComponent } from './coffee-footer/coffee-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    CoffeeheadComponent,
    CoffeeContentComponent,
    CoffeeFooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


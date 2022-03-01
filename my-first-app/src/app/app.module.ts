import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CoffeeheadComponent } from './coffeehead/coffeehead.component';
import { CoffeeContentComponent } from './coffee-content/coffee-content.component';
import { CoffeeFooterComponent } from './coffee-footer/coffee-footer.component';
import { ParentComponent } from './parent/parent.component';
import { ProductComponent } from './product/product.component';
import { ProductDeatailsComponent } from './product-deatails/product-deatails.component';
import { Product1Component } from './product1/product1.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { DatetimeService } from './datetime.service';
import { UserInformationService } from './user-information.service';
import { TimerComponent } from './timer/timer.component';
import { ReactiveFormsModuleComponent } from './reactive-forms-module/reactive-forms-module.component';
import { ReactiveAddressFormComponent } from './reactive-address-form/reactive-address-form.component';
@NgModule({
  declarations: [
    AppComponent,
    CoffeeheadComponent,
    CoffeeContentComponent,
    CoffeeFooterComponent,
    ParentComponent,
    ProductComponent,
    ProductDeatailsComponent,
    Product1Component,
    AddtocartComponent,
    TimerComponent,
    ReactiveFormsModuleComponent,
    ReactiveAddressFormComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
 
  ],
  providers: [DatetimeService,UserInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }


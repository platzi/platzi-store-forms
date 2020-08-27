import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';

import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    OrderRoutingModule,
  ]
})
export class OrderModule { }

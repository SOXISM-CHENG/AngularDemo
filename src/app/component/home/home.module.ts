import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonAllModule } from '../../../app/component/common';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonAllModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }

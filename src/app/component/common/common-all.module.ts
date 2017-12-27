import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

export const allComponents = [
  HeadComponent,
  FooterComponent,
  PageNotFoundComponent,
  HomeBodyComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgZorroAntdModule.forRoot(),
  ],
  exports: [
    ...allComponents
  ],
  declarations: [
    ...allComponents
  ]
})
export class CommonAllModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ImgComponent } from '../../../app/component/common/img/img.component';
import { LoginComponent } from '../../../app/component/common/login/login.component';

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
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
  ],
  exports: [
    ...allComponents
  ],
  declarations: [
    ...allComponents,
    ImgComponent,
    LoginComponent

  ]
})
export class CommonAllModule { }

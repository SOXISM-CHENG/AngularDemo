/**
 * 路由配置
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PageNotFoundComponent, HomeBodyComponent, LoginComponent } from '../app/component/common';
// import { LoginComponent } from '../app/component/common/login/login.component';
/**
 * 引入的路由指向文件
 */

// import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '', component: HomeBodyComponent,
    children: [
      { path: 'home', loadChildren: './component/home/home.module#HomeModule' },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [
    NgZorroAntdModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: [
  ]
})
export class AppRoutingModule { }
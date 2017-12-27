/**
 * 路由配置
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HomeComponent } from './home.component'
/**
 * 引入的路由指向文件
 */

// import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [
    NgZorroAntdModule,
    RouterModule.forChild(appRoutes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [
  ]
})
export class HomeRoutingModule { }
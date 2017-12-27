/*
 * @Author: mozhengqian
 * @Date: 2017-12-27 15:59:36
 * @Last Modified by:   mozhengqian
 * @Last Modified time: 2017-12-27 15:59:36
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { ReduxService, createReducer } from '../../app/redux/redux.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ state: createReducer })
  ],
  providers: [ReduxService],
  declarations: []
})
export class ReduxModule { }

/*
 * @Author: mozhengqian
 * @Date: 2017-12-27 15:59:11
 * @Last Modified by: mozhengqian
 * @Last Modified time: 2017-12-27 16:03:39
 */

import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { createSelector } from 'reselect';
import { storeLogger } from 'ngrx-store-logger';
import { compose } from '@ngrx/core';
import { combineReducers } from '@ngrx/store';
import { Reducers } from '../../app/redux/reducer.utils';
// declare let window: any;

const developmentReducer: Function = compose(storeLogger(), combineReducers)(Reducers); // storeLogger(),

export function createReducer(state: any, action: any) {
  return developmentReducer(state, action);
}

export interface StoreState {
  state: any
}

@Injectable()
export class ReduxService {
  state: any = {};
  apiBool: boolean = true;
  constructor(private store: Store<StoreState>) {
    this.store.select('state').subscribe(item => {
      this.apiBool = false;
      this.state = item;
    });
  }
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
  // tslint:disable-next-line:eofline
}

/*
 * @Author: mozhengqian
 * @Date: 2017-12-27 16:00:25
 * @Last Modified by: mozhengqian
 * @Last Modified time: 2017-12-27 16:04:52
 */

import { Action } from '@ngrx/store';
import { ActionTypes } from '../../../app/redux/action.util';

export class GetUserData implements Action {
	// tslint:disable-next-line:indent
	type = ActionTypes.GET_USER_DATA;
	constructor(
		// tslint:disable-next-line:indent
		public data: any
	) { }
	// tslint:disable-next-line:eofline
}
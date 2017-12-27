/*
 * @Author: mozhengqian
 * @Date: 2017-12-27 16:02:07
 * @Last Modified by:   mozhengqian
 * @Last Modified time: 2017-12-27 16:02:07
 */
import { ActionTypes } from '../../../app/redux/action.util';
export function reducer(state, action: any) {
	// tslint:disable-next-line:indent
	switch (action.type) {
		case ActionTypes.GET_USER_DATA: {
			// tslint:disable-next-line:indent
			return Object.assign({}, state, {
				...action.data
				// tslint:disable-next-line:indent
			});
		}
		// tslint:disable-next-line:indent
		default: return state;
	}
}

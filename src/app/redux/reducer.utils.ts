/*
 * @Author: mozhengqian
 * @Date: 2017-12-27 16:00:03
 * @Last Modified by: mozhengqian
 * @Last Modified time: 2017-12-27 16:02:35
 */
/**
 * 需要引入的 reducer
 */
import * as appReducer from './reducers/userinfo.reducer';

export const Reducers = {
	// tslint:disable-next-line:indent
	userinfo: appReducer.reducer,
}

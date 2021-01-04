import * as actionTypes from './actionTypes';
import {fetchCartData} from '@/api'

const initData = (goods) => ({
  type: actionTypes.INIT_CART_DATA,
  goods
})

export const initCartDataAction = () => {
  return async (dispatch) => {
    const {data: {goods}} = await fetchCartData();
    dispatch(initData(goods))
  }
}

export const changeCheckedData = (data) => ({
  type: actionTypes.CHANGE_CHECKED_DATA,
  data
})
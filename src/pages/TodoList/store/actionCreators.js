import * as actionTypes from './actionTypes'
import {fetchTodoListData} from '@/api'

const initListData = (data) => ({
  type: actionTypes.INIT_LIST_DATA,
  data
})

export const inputChangeAction = (value) => ({
  type: actionTypes.INPUT_CHANGE,
  value
})

export const addListAction = () => ({
  type: actionTypes.ADD_LIST_ITEM
})

export const initListDataAction = () => {
  return async (dispatch) => {
    const {data: {list: res}} = await fetchTodoListData();
    dispatch(initListData(res))
  }
}

export const deleteListDataAction = (index) => ({
  type: actionTypes.DELETE_LIST_DATA,
  index
})
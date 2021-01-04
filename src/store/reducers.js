import {combineReducers} from 'redux';
import {reducer as todoListReducer} from '@/pages/TodoList/store'
import {reducer as cartReducer} from '@/pages/cart/store'

export default combineReducers({
  todoList: todoListReducer,
  cart: cartReducer
})

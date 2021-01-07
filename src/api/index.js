import instance from './config'

export const fetchTodoListData = () => instance.get('/api/todoList.json')

export const fetchCartData = () => instance.get('/api/cart.json')
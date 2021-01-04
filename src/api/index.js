import axios from 'axios'

const instance = axios.create({
  baseURL: '',
  timeout: 1000
})

instance.interceptors.response.use(res => {
  console.log(res.data)
  return res;
})

export const fetchTodoListData = () => instance.get('/api/todoList.json')

export const fetchCartData = () => instance.get('/api/cart.json')
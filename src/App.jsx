import React from 'react'
import {GlobalStyle} from './style'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './store'

import Header from '@/components/Header'
import TodoList from '@/pages/TodoList'
import Cart from '@/pages/cart'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle></GlobalStyle>
        <Header></Header>

        <Switch>
          <Route path="/" exact>
            <Redirect to="/todo-list"></Redirect>
          </Route>
          <Route path="/todo-list" exact>
            <TodoList></TodoList>
          </Route>
          <Route path="/cart" exact>
            <Cart></Cart>
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
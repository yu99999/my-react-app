import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  padding: 10px 20px;
  height: 56px;

  .link{
    line-height: 56px;
    margin: 0 15px;
    display: inline-block;
    color: #333;
    text-decoration: none;
  }
  .selected{
    color: #1890ff;
  }
`
const Header = () => {

  return (
    <HeaderWrapper>
      <NavLink to="/todo-list" className="link" activeClassName="selected">TodoList</NavLink>
      <NavLink to="/cart" className="link" activeClassName="selected">cart</NavLink>
    </HeaderWrapper>
  )
}

export default Header;
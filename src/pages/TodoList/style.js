import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 10px 30px;
  box-sizing: border-box;
`

export const Input = styled.input.attrs({
  placeholder: '请输入'
})`
  border: 1px solid #d9d9d9;
  padding: 0 11px;
  width: 300px;
  line-height: 35px;
  height: 35px;
  box-sizing: border-box;
`

export const Button = styled.button`
  background-color: #1890ff;
  color: #fff;
  margin-left: 10px;
  height: 32px;
  padding: 4px 20px;
  cursor: pointer;
  border-radius: 2px;

  &.del{
    height: 24px;
    padding: 4px 10px;
    font-size: 12px;
    background-color: #ff4d4f;
  }
`

export const List = styled.ul`
  padding: 20px;

  li{
    height: 35px;
    line-height: 35px;
    list-style: circle;
    width: 400px;
  }
`
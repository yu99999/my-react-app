import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'
import {Wrapper, Input, Button, List} from './style'

const TodoList = (props) => {
  const {inputValue, list} = props;
  const {handleInputChange, handleClick, handleInitList, handleDelete} = props;

  useEffect(() => {
    if(list.length > 0) return;
    handleInitList();
  }, [])

  return (
    <Wrapper>
      <Input value={inputValue} onChange={handleInputChange} />
      <Button onClick={handleClick}>添加</Button>
      
      <List>
        {
          list.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <Button onClick={() => handleDelete(index)} className="del">删除</Button>
              </li>
            )
          })
        }
      </List>
    </Wrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.todoList.inputValue,
    list: state.todoList.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e){
      const action = actionCreators.inputChangeAction(e.target.value);
      dispatch(action)
    },
    handleClick(){
      const action = actionCreators.addListAction();
      dispatch(action)
    },
    handleInitList(){
      dispatch(actionCreators.initListDataAction())
    },
    handleDelete(index){
      dispatch(actionCreators.deleteListDataAction(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
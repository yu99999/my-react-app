import * as actionTypes from './actionTypes'
import producer from 'immer'

const defaultStates = {
  inputValue: '',
  list: []
}

export default (state = defaultStates, action) => {
  return producer(state, (draft) => {
    switch (action.type){
      case actionTypes.INPUT_CHANGE:
        draft.inputValue = action.value;
        return ;
      case actionTypes.ADD_LIST_ITEM:
        draft.list.push(draft.inputValue);
        draft.inputValue = '';
        return ;
      case actionTypes.INIT_LIST_DATA:
        draft.list = action.data;
        return ;
      case actionTypes.DELETE_LIST_DATA:
        draft.list.splice(action.index, 1);
        return ;
      default: return;
    }
  })
}
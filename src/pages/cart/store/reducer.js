import * as actionTypes from './actionTypes'

const defaultState = {
  goods: [],
  checked: {}
}

export default (state = defaultState, action) => {
  if(action.type === actionTypes.INIT_CART_DATA){
    const newState = JSON.parse(JSON.stringify(state));
    newState.goods = action.goods;
    return newState
  }
  if(action.type === actionTypes.CHANGE_CHECKED_DATA){
    const newState = JSON.parse(JSON.stringify(state));
    newState.checked = action.data;
    return newState;
  }
  return state;
}
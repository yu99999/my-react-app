import React from 'react'

const CartItem = (props) => {
  const {item, checkedState} = props;
  const {handleCheckedChangeRef} = props;
  console.log('child render')
  
  return (
    <li>
      <div>
        <input 
          type="checkbox" id={item.id} 
          onChange={() => handleCheckedChangeRef.current(item.id, !checkedState)} 
          checked={checkedState}
        />
        <label htmlFor={item.id}>{item.name}</label>
      </div>
      <span>￥{item.price}</span>
    </li>
  )
}

// 避免重复渲染
const areEqual = (prev, next) => {
  return prev.checkedState === next.checkedState;
}

export default React.memo(CartItem, areEqual);
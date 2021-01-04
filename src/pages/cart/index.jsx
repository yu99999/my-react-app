import React, {useEffect, useCallback, useRef} from 'react';
import {connect} from 'react-redux'
import {Wrapper, List} from './style'
import CartItem from '@/components/cartItem'
import * as actionCreators from './store/actionCreators'

const Cart = (props) => {
  const {goods, checked} = props;
  const {handleInitCart, handleCheckedChange} = props
  
  useEffect(() => {
    handleInitCart()
  }, [])

  // 过滤出被选择的商品
  const filterChecked = () => {
    return Object.entries(checked)
      .filter(entries => Boolean(entries[1]))
      .map(([checkedId]) => goods.find(({id}) => id === Number(checkedId)))
  }
  // 计算价格
  const sumPrice = (checkedGoods) => {
    return checkedGoods.reduce((total, item) => total + item.price, 0)
  }
  
  const total = sumPrice(filterChecked());

  const isCheckedAll = Object.keys(filterChecked()).length === goods.length
  const changeCheckAll = useCallback(() => {
    let temp = {};
    goods.forEach(item => {
      temp[item.id] = !isCheckedAll
    })
    handleCheckedChange(temp)
  }, [isCheckedAll, goods])

  const onCheckedChange = (id, checkedState) => {
    console.log(checked)
    handleCheckedChange(Object.assign({}, checked, {
      [id]: checkedState
    }))
  }
  console.log('parent render')

  // 解决闭包陷阱，整个react生命周期中只存在一个引用
  const onCheckedChangeRef = useRef(onCheckedChange);
  useEffect(() => {   // 每次重新渲染更新ref引用的指向
    onCheckedChangeRef.current = onCheckedChange;
  })

  return (
    <Wrapper>
      <List>
        {
          goods.map((item) => {
            return (
              <CartItem 
                key={item.id} 
                item={item}
                checkedState={Boolean(checked[item.id])}
                handleCheckedChangeRef={onCheckedChangeRef}
              >
              </CartItem>
            )
          })
        }
        <li>
          <div>
            <input 
              type="checkbox" 
              id="check-all" 
              checked={isCheckedAll} 
              onChange={changeCheckAll}
            />
            <label htmlFor="check-all">全选</label>
          </div>
          <span>商品总价￥{total}</span>
        </li>
      </List>
    </Wrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    goods: state.cart.goods,
    checked: state.cart.checked
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInitCart(){
      const action = actionCreators.initCartDataAction();
      dispatch(action)
    },
    handleCheckedChange(data){
      dispatch(actionCreators.changeCheckedData(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
import React, { useContext } from 'react';
import shortid from 'shortid';

export const Store = React.createContext();

const initState = {
  orders: [{
    id: shortid(),
    drink: '早餐店大冰奶',
    price: 99,
    comment: '老闆娘很漂亮',
    isPaid: false,
    created: new Date().toLocaleString(),
    updated: null,
  }, {
    id: shortid(),
    drink: '麥香奶茶',
    price: 10,
    comment: '',
    isPaid: true,
    created: new Date().toLocaleString(),
    updated: null,
  }]
}

function ordersReducer(state, action) {
  console.log(state)
  switch(action.type) {
    case 'ADD_ORDER': {
      return {
        ...state,
        orders: [action.order, ...state.orders]
      }
    }
    case 'EDIT_ORDER': {
      const orderId = action.order.id;
      return {
        ...state,
        orders: state.orders.map((o)=> {
          if (o.id !== orderId) {
            return o
          }
          return {
            ...o,
            ...action.order,
            updated: new Date().toLocaleString(),
          }
        })
      }
    }
    case 'DELETE_ORDER': {
      return {
        ...state,
        orders: state.orders.filter(o => o.id !== action.id)
      }
    }
    case 'TOGGLE_PAID_STATEMENT': {
      const orderId = action.id;
      return {
        ...state,
        orders: state.orders.map((o)=> {
          if (o.id !== orderId) {
            return o
          }
          return {
            ...o,
            isPaid: !o.isPaid,
          }
        })
      }
    }
    default:
      console.log(action)
      return state
  }
}

export default function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(ordersReducer, initState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

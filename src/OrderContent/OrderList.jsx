import React, { useEffect, useContext } from 'react';
import {
  Store
} from '../store';

import OrderItem from './OrderItem';





const OrderList = ({ orders }) => {
  return (
    <div>
      {
        orders.map(o => <OrderItem key={o.id} order={o} />)
      }
    </div>
  )
}


export default OrderList;

import React, { useState, useContext } from 'react';
import {
  Store
} from '../store';

import OrderFilter from './OrderFilter';
import OrderList from './OrderList';






const OrderContent = () => {
  const [ filter, setFilter ] = useState('all');
  const {state: { orders } } = useContext(Store);

  const filterOrders = orders.filter(o => {
    return {
      all: o,
      paid: o.isPaid,
      unPaid: !o.isPaid,
    }[filter]
  });

  const amount = filterOrders.reduce((a,b) => a + b.price, 0);

  return (
    <div>
      <OrderFilter filter={filter} setFilter={setFilter} amount={amount} />
      <OrderList filter={filter} orders={filterOrders} />
    </div>
  )
}


export default OrderContent;

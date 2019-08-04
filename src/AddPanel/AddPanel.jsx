import React, { useContext, useState } from 'react';
import shortid from 'shortid';

import {

  Button,
  OrderPanel,
} from '../components';

import {
  Store,
} from '../store';



const orderTemplate = () => ({
  id: shortid(),
  isPaid: false,
  created: new Date().toLocaleString(),
  updated: null,
})

const AddPanel = () => {
  const { dispatch } = useContext(Store);
  const [form, setForm] = useState({});


  const addOrder = () => {
    // TODO ADD validation
    let price = parseInt(form.price);
    price = isNaN(price) ? 0 ? price < 0 : 0 : price;

    dispatch({
      type: 'ADD_ORDER',
      order: {
        ...orderTemplate(),
        ...form,
        price,
      }
    })

    setForm({});
  }

  

  return (
    <OrderPanel
      form={form}
      setForm={setForm}
      footer={<Button onClick={addOrder}>Add</Button>}
    />
  )
}

export default AddPanel;

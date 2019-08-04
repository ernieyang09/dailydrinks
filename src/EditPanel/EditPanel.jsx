import React, { useContext, useEffect, useState } from 'react';
import shortid from 'shortid';

import {

  Button,
  OrderPanel,
} from '../components';

import {
  Store,
} from '../store';

import {
  PopupboxManager,
} from 'react-popupbox';


const orderTemplate = () => ({
  id: shortid(),
  isPaid: false,
  created: new Date().toLocaleString(),
  updated: null,
})

const EditPanel = (props) => {
  const { dispatch } = useContext(Store);
  const [form, setForm] = useState(props.form);
  

  useEffect(()=> {
    setForm(props.form);
  }, [props.form])


  const editOrder = () => {
    // TODO ADD validation
    let price = parseInt(form.price);
    price = isNaN(price) ? 0 ? price < 0 : 0 : price;

    dispatch({
      type: 'EDIT_ORDER',
      order: {
        ...orderTemplate(),
        ...form,
        price
      }
    });

    PopupboxManager.close();
  }

  

  return (
    <OrderPanel
      form={form}
      setForm={setForm}
      footer={<>
        <Button onClick={editOrder} style={{ marginRight: '6px' }}>確認</Button>
        <Button onClick={()=> { PopupboxManager.close() }}>取消</Button>
      </>}
    />
  )
}

export default EditPanel;

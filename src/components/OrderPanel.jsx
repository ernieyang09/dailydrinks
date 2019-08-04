import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Input,
  TextArea,
} from '../components';

const OrderPanel = (props) => {

  const { form, setForm } = props;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm(f => ({...f, [name]: value}));
  }
  

  return (
    <StyledPanel>
      <div className='input-wrap'>
        <Input name='drink' onChange={handleChange} value={form['drink'] || ''} placeholder='品項' width='120px' />
        <Input name='price' onChange={handleChange} value={form['price'] !== undefined ? form['price'] : ''} placeholder='價格' width='120px' />
      </div>
      <div className="comment">
        <div>備註</div>
        <TextArea name="comment" onChange={handleChange} value={form['comment'] || ''} width='100%' />
      </div>
      <div className="footer">
        {props.footer}
      </div>
    </StyledPanel>
  )
}

const StyledPanel = styled.div`
  
  color: #797979;
  div:not(:first-child) {
    margin-top: 8px;
  }
  .input-wrap input:not(:first-child) {
    margin-left: 12px;
  }

  .comment {
    div {
      margin: 6px 0;
    }
  }

  .footer {
    text-align: right;
  }
`

export default OrderPanel;

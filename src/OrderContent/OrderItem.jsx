import React, { useContext } from 'react';
import styled from 'styled-components';

import {
  Button,
} from '../components';

import {
  PopupboxManager,
} from 'react-popupbox';

import EditPanel from '../EditPanel';

import {
  Store,
} from '../store';


const DeletePanel = ({ dispatch, id }) => {

  const deleteOrder = () => {
    dispatch({
      type: 'DELETE_ORDER',
      id,
    })
    PopupboxManager.close();
  }

  return <StyledDeletePanel>
      <div>Are you sure?</div>
      <div>
        <Button onClick={deleteOrder} style={{ marginRight: '6px' }}>確認</Button>
        <Button onClick={()=> { PopupboxManager.close() }}>取消</Button>
      </div>
  </StyledDeletePanel>
}

const StyledDeletePanel = styled.div`
  color: #797979;
  div:not(:first-child) {
    margin-top: 8px;
  }
  div:last-child {
    text-align: right;
  }
`

const OrderItem = (props) => {
  const { dispatch } = useContext(Store);
  const { order: { id, drink, price, comment, created, isPaid } } = props;

  const editOrder = () => {
    PopupboxManager.open({
      config: {
        titleBar: {
          enable: true,
        },
        fadeIn: false,
        fadeOut: false,
      },
      content: <EditPanel form={props.order} />
    })
  }

  const deleteOrder = () => {
    PopupboxManager.open({
      config: {
        titleBar: {
          enable: true,
        },
        fadeIn: false,
        fadeOut: false,
      },
      content: <DeletePanel dispatch={dispatch} id={id} />
    })
  }

  const togglePaidStatement = () => {
    dispatch({
      type: 'TOGGLE_PAID_STATEMENT',
      id,
    })
  }

  return (
    <StyledOrderItem isPaid={isPaid} onDoubleClick={togglePaidStatement}>
      <div className='order-item-wrap'>
        <div>{id} {created}</div>
        <div>{drink}</div>
        <div>{price}</div>
        <div className='comment'>{comment}</div>
        <div></div>
      </div>
      <div className='order-item-function'>
        <Button onClick={editOrder}>編輯</Button>
        <Button onClick={deleteOrder}>刪除</Button>
      </div>
    </StyledOrderItem>
  )
}


const StyledOrderItem = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 16px;

  padding: 12px 10px;
  margin: 8px 0;

  cursor: pointer;

  border: 1px solid;
  border-color: ${props => props.isPaid ? "#8bc34a" : "#e91e63" };

  transition: border-color 0.3s ease;

  .order-item-wrap {
    flex: 1;

    div {
      margin: 2px 0;
    }

    .comment {
      white-space: pre-line;
    }
  }

  .order-item-function {
    text-align: right;
    flex-basis: 50px;

    ${Button}:not(:first-child) {
      margin-top: 4px;
    }
  }
`


export default OrderItem;

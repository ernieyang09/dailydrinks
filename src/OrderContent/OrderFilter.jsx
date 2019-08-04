import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';


const OrderFilter = ({ filter, setFilter, amount }) => {
  return (
    <StyledOrderFilter filter={filter}>
      <div>
        <span className={cx('filter', { active: filter === 'all'})} onClick={()=> { setFilter('all'); }}>全部</span>
        <span className={cx('filter', { active: filter === 'paid'})}  onClick={()=> { setFilter('paid'); }} >已付</span>
        <span className={cx('filter', { active: filter === 'unPaid'})}  onClick={()=> { setFilter('unPaid'); }}>未付</span>
      </div>
      <div>
        $ {amount}
      </div>
    </StyledOrderFilter>
  )
}

const StyledOrderFilter = styled.div`
  display: flex;
  justify-content: space-between;
  
  .filter {
    padding: 0 5px;
    cursor: pointer;

    &.active {
      border: 1px solid;
    }
  }

`



export default OrderFilter;

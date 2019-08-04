
import React from 'react';
import styled from 'styled-components';

import AddPanel from './AddPanel';
import OrderContent from './OrderContent';

import "react-popupbox/dist/react-popupbox.css";
import {
  PopupboxContainer
} from 'react-popupbox';




const App = () => {

  return (
      <>
        <StyledApp>
          <h1>Dailydrinks</h1>
          <AddPanel />
          <hr />
          <OrderContent />
        </StyledApp>
        <PopupboxContainer />
      </>
  )
}


const StyledApp = styled.div`
    margin: 30px auto;
    width: 80vw;
    max-width: 480px;
    min-height: 80vh;
    background: white;
    border-radius: 12px;
    box-sizing: border-box;
    padding: 15px;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    text-align:center;
  }
`;

export default App;

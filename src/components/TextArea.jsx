import React from 'react';
import styled from 'styled-components';


const TextArea = (props) => {
  return <StyledInput type='text' {...props} />
}

const StyledInput = styled.textarea`
  padding: 0.3em 1em;
  outline: 0;
  border: 1px solid rgba(34,36,38,.15);
  transition: border 0.5s ease;
  border-radius: .25rem;
  resize: none;
  width: ${props => props.width || 'auto'};

  &:focus {
    border-color: #85b7d9;
  }
`;

export default TextArea;

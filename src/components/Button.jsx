import React from 'react';
import styled from 'styled-components';

const Button = ({className, ...props}) => {
  const { children, ...others } = props;
  return <div className={className} {...others}>{children}</div>
}

const StyledBtn = styled(Button)`
  display: inline-block;
  padding: .3em 1em;
  color:  rgba(0,0,0,.5);
  border: 1px solid;
  font-weight: 400;
  border-radius: .25rem;
  cursor: pointer;
  font-size:11px;
  transition: color 0.5s ease;
  

  &:hover {
    color:  rgba(0,0,0,.8);
  }
`;


export default StyledBtn;

import * as React from 'react';
import styled from 'styled-components';
import InformationIcon from './svgs/Information'; 

const StyledWrapper = styled.div`
    border: 1px solid #80E5E9;    
    border-radius: 8px;
    color: #3D4168;
    background: white;
    display: grid;
    grid-template-columns: 60px 1fr;
    font-size: 16px;
    min-height: 90px;
    position: relative;
    margin: auto;
`;

const StyledSide  = styled.div`
    margin: auto;
`;


export function Information({children}) {
  return (
    <StyledWrapper>
        <div style={{ background: '#80E5E9', display: 'flex'}}>
            <StyledSide>
                <InformationIcon />
            </StyledSide>
        </div>
      <div style={{ padding: '24px'}}> {children} </div>
    </StyledWrapper>
  );
}

import React from 'react';
import styled from 'styled-components';
import ConfirmationIcon from './svgs/Confirmation'; 
import InformationIcon from './svgs/Information'; 
import WarningIcon from './svgs/Warning'; 

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
    margin: 40px auto;
`;

const StyledSide  = styled.div`
    margin: auto;
`;

const StyledText = styled.div`
  padding: 24px;
  line-height: 32px;
`;

const Information = ({ children, type = 'information' }) => {
  const bgMap = {
    'information': '#80E5E9',
    'confirmation': '#70C9B7',
    'caution': '#F3C25D',
    'warning': '#EE6D5F'
  };
  const activeBg = bgMap[type];

  return (
    <StyledWrapper style={{border: `1px solid ${activeBg}`}}>
        <div style={{ background: activeBg, display: 'flex'}}>
            <StyledSide>
               {type === 'confirmation' &&  <ConfirmationIcon />}
               {type === 'information' &&  <InformationIcon />}
               {type === 'caution' && <WarningIcon />}
               {type === 'warning' && <WarningIcon />}
            </StyledSide>
        </div>
      <StyledText> 
        {children}
      </StyledText>
    </StyledWrapper>
  );
}

export default Information;

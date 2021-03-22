import React from 'react';
import styled from 'styled-components';
import NoteIcon from './svgs/Note';
import TipIcon from './svgs/Tip'; 
import InformationIcon from './svgs/Information'; 
import WarningIcon from './svgs/Warning'; 

const StyledWrapper = styled.div`
    border: 1px solid #80E5E9;    
    border-radius: 8px;
    color: #0C1141;
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

const StyledLabel = styled.div`
  font-size: 18px;
  line-height:24px
  margin: 8px 0px;
`;

const Information = ({ children, type = 'information' }) => {
  const bgMap = {
    'information': '#80E5E9',
    'tip': '#70C9B7',
    'note': '#F3C25D',
    'warning': '#EE6D5F'
  };
  const activeBg = bgMap[type];

  return (
    <StyledWrapper style={{border: `1px solid ${activeBg}`}}>
        <div style={{ background: activeBg, display: 'flex'}}>
            <StyledSide>
               {type === 'tip' &&  <TipIcon />}
               {type === 'information' &&  <InformationIcon />}
               {type === 'note' && <NoteIcon />}
               {type === 'warning' && <WarningIcon />}
            </StyledSide>
        </div>
      <StyledText> 
        <StyledLabel>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </StyledLabel>
        {children}
      </StyledText>
    </StyledWrapper>
  );
}

export default Information;

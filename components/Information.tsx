import React from 'react';
import styled from 'styled-components';
import InformationIcon from './svgs/Information';
import NoteIcon from './svgs/Note';
import TipIcon from './svgs/Tip';
import WarningIcon from './svgs/Warning';

const StyledWrapper = styled.div`
    border: 1px solid ${props => props.activeBg};    
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
`;

const StyledLabel = styled.div`
  font-size: 18px;
  line-height:24px
  margin: 8px 0px;
  font-weight: 500;
`;

interface Props {
  children: string;
  header?: string;
  type?: string;
}


const Information = ({ children, header, type = 'information' }: Props): JSX.Element => {
  const bgMap = {
    'information': '#80E5E9',
    'tip': '#70C9B7',
    'note': '#F3C25D',
    'warning': '#EE6D5F'
  };
  const headerLabel = header || type;
  const activeBg = bgMap[type];

  return (
    <StyledWrapper activeBg={activeBg}>
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
          {headerLabel.charAt(0).toUpperCase() + headerLabel.slice(1)}
        </StyledLabel>
        {children}
      </StyledText>
    </StyledWrapper>
  );
}

export default Information;

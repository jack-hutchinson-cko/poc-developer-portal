import styled from "styled-components";

export const StyledIcon = styled.svg<{
  width: number;
  height: number;
  color?: string;
}>`
  fill: none;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  color: #6d708e;
`;

export const StyledIconIB = styled(StyledIcon)`
  color: #fff;
`;

export const StyledSocialIcon = styled(StyledIcon)`
  color: #fff;
`;

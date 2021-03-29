import React from 'react';
import { StyledTopLabel } from './menuDropdown.styles';
import { StyledContainer, StyledItem, StyledText } from './menuDropdown.styles';
import { ArrowRight, ApiRef, FAQ } from '../../svg';

const MenuDropdown = (): JSX.Element => (
	<StyledContainer>
		<StyledItem href="https://docs.checkout.com" target="_blank">
			<StyledTopLabel>
				<ApiRef />
				Guides
			</StyledTopLabel>
			<StyledText>
				Hey, come look at the guides
				<ArrowRight />
			</StyledText>
		</StyledItem>
		<StyledItem href="https://docs.checkout.com/four" target="_blank">
			<StyledTopLabel>
				<FAQ />
				FAQ
			</StyledTopLabel>
			<StyledText>
				Find answers to our most frequently asked questions
				<ArrowRight />
			</StyledText>
		</StyledItem>
	</StyledContainer>
);

export default MenuDropdown;

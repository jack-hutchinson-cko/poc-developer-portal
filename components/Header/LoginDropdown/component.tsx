import React from 'react';
import {
	StyledApplyLink,
	StyledBottom,
	StyledButtonContainer,
	StyledContainer,
	StyledTop,
	StyledLabel,
	StyledLink,
	StyledText,
	StyledTextBottom,
} from './loginDropdown.styles';
import { ArrowRight, TheHub, TestAccount } from '../../svg';
import ButtonLink from '../../ButtonLink';

const LoginDropdown = (): JSX.Element => (
	<StyledContainer>
		<StyledTop>
			<StyledLabel>
				<TheHub />
				The Hub
			</StyledLabel>
			<StyledText>Monitor transactions, business performance and customer trends.</StyledText>
			<StyledButtonContainer>
				<ButtonLink to="https://hub.checkout.com/login" hierarchy="secondary">
					Log In
				</ButtonLink>
				<StyledText>or</StyledText>
				<StyledApplyLink href="https://www.checkout.com/get-test-account">
					Apply for an account
					<ArrowRight />
				</StyledApplyLink>
			</StyledButtonContainer>
		</StyledTop>
		<StyledBottom>
			<StyledLabel>
				<TestAccount />
				Test account
			</StyledLabel>
			<StyledTextBottom>
				<StyledLink href="https://sandbox.checkout.com/login">Log in</StyledLink>
				or
				<StyledLink href="https://www.checkout.com/get-test-account">apply for a test account</StyledLink>
			</StyledTextBottom>
		</StyledBottom>
	</StyledContainer>
);

export default LoginDropdown;
